import { useState } from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  label,
  onChange,
  placeholder = "",
  value: controlledValue,
  validate,
  errorMessage: customErrorMessage,
  required = false,
  minLength,
  maxLength,
  ...rest
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState("");

  const [error, setError] = useState("");

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (!isControlled) {
      setUncontrolledValue(inputValue);
    }

    let validationError = "";

    if (required && !inputValue.trim()) {
      validationError = "This field is required.";
    }

    if (minLength && inputValue.length < minLength) {
      validationError = `Minimum length is ${minLength} characters.`;
    }

    if (maxLength && inputValue.length > maxLength) {
      validationError = `Maximum length is ${maxLength} characters.`;
    }

    if (validate && !validationError) {
      const customError = validate(inputValue);
      if (customError) {
        validationError = customError;
      }
    }

    setError(validationError);

    if (onChange) {
      onChange(e, validationError);
    }
  };

  const reset = () => {
    if (!isControlled) {
      setUncontrolledValue("");
    }
    setError("");
  };

  return (
    <div className="input-parent">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        {...rest}
        className="input"
      />
      {(error || customErrorMessage) && (
        <div className="input-error">
          {error || customErrorMessage}
        </div>
      )}
    </div>
  );
};

// PropTypes for type checking
Input.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "email",
    "password",
    "number",
    "tel",
    "url",
    "search",
    "date",
    "time",
    "datetime-local",
    "month",
    "week",
  ]),
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  validate: PropTypes.func,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
};

export default Input;
