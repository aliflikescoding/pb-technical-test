import "./App.css";
import Input from "./components/Input";
import { useSelector, useDispatch } from "react-redux";
import store from "./redux/store";
import { updateField } from "./redux/slices/slices"; // adjust path as needed

function App() {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);

  /* handle input changes */
  const handleInputUsernameChange = (e, error) => {
    const { value } = e.target;

    dispatch(
      updateField({
        field: "username",
        value,
        error,
      })
    );
  };

  const handleInputEmailChange = (e, error) => {
    const { value } = e.target;

    dispatch(
      updateField({
        field: "email",
        value,
        error,
      })
    );
  };

  const handleFirstNameChange = (e, error) => {
    const { value } = e.target;

    dispatch(
      updateField({
        field: "firstName",
        value,
        error,
      })
    );
  };
  const handleLastNameChange = (e, error) => {
    const { value } = e.target;

    dispatch(
      updateField({
        field: "lastName",
        value,
        error,
      })
    );
  };

  const handleAgeChange = (e, error) => {
    const { value } = e.target;

    dispatch(
      updateField({
        field: "age",
        value,
        error,
      })
    );
  };

  const handleHobby = (e, error) => {
    const { value } = e.target;

    dispatch(
      updateField({
        field: "hobby",
        value,
        error,
      })
    );
  };

  /* input validation */
  const validateUsername = (value) => {
    const regex = /[^a-zA-Z0-9_-]/;
    if (regex.test(value)) {
      return "Username cannot contain special characters. Only letters or numbers or _ or - are allowed.";
    }
    return "";
  };

  const validateEmail = (value) => {
    if (!value.includes("@")) {
      return "Email must contain @";
    }
    if (!value.includes(".com")) {
      return "Email must contain .com";
    }
    return "";
  };

  const validateFirstName = (value) => {
    const regex = /[^a-zA-Z]/;

    if (regex.test(value)) {
      return "First name cannot contain any numbers or special characters.";
    }
    return "";
  };

  const validateLastName = (value) => {
    const regex = /[^a-zA-Z]/;

    if (regex.test(value)) {
      return "Last name cannot contain any numbers or special characters.";
    }
    return "";
  };

  const validateAge = (value) => {
    const numberValue = Number(value);
    if (isNaN(numberValue) || numberValue < 1 || numberValue > 100) {
      return "Age must be a number between 1 and 100.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formState.username.value.trim()) {
      errors.username = "Username is required";
    } else {
      const usernameError = validateUsername(formState.username.value);
      if (usernameError) errors.username = usernameError;
    }

    if (!formState.email.value.trim()) {
      errors.email = "Email is required";
    } else {
      const emailError = validateEmail(formState.email.value);
      if (emailError) errors.email = emailError;
    }

    if (!formState.firstName.value.trim()) {
      errors.firstName = "First name is required";
    } else {
      const firstNameError = validateFirstName(formState.firstName.value);
      if (firstNameError) errors.firstName = firstNameError;
    }

    if (!formState.lastName.value.trim()) {
      errors.lastName = "Last name is required";
    } else {
      const lastNameError = validateLastName(formState.lastName.value);
      if (lastNameError) errors.lastName = lastNameError;
    }

    if (!formState.age.value.trim()) {
      errors.age = "Age is required";
    } else {
      const ageError = validateAge(formState.age.value);
      if (ageError) errors.age = ageError;
    }

    if (formState.hobby.value.trim()) {
      const hobbyError = validateHobby(formState.hobby.value);
      if (hobbyError) errors.hobby = hobbyError;
    }

    if (Object.keys(errors).length > 0) {
      Object.keys(errors).forEach((field) => {
        dispatch(
          updateField({
            field,
            value: formState[field].value,
            error: errors[field],
          })
        );
      });
      return;
    }

    console.log("Complete Redux Form State:", formState);
  };

  const validateHobby = (value) => {
    if (!value) return "";

    const regex = /[^a-zA-Z\s]/;

    if (value.length > 10) {
      return "Hobby must be maximum 10 characters long.";
    }

    if (regex.test(value)) {
      return "Hobby cannot contain numbers or special characters.";
    }
    return "";
  };

  return (
    <>
      <div>
        <div className="text-container">
          <hr className="line" />
          <span className="text">Make your user</span>
          <hr className="line" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-fields">
          <Input
            label="Username"
            name="username"
            value={formState.username.value}
            onChange={handleInputUsernameChange}
            validate={validateUsername}
            required
            placeholder="John Doe"
            minLength={3}
            maxLength={20}
            errorMessage={formState.username.error}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formState.email.value}
            onChange={handleInputEmailChange}
            validate={validateEmail}
            required
            placeholder="johndoe@gmail.com"
            minLength={3}
            maxLength={20}
            errorMessage={formState.email.error}
          />
          <Input
            label="First Name"
            name="firstName"
            value={formState.firstName.value}
            onChange={handleFirstNameChange}
            validate={validateFirstName}
            required
            placeholder="John"
            minLength={3}
            maxLength={20}
            errorMessage={formState.firstName.error}
          />
          <Input
            label="Last Name"
            name="lastName"
            value={formState.lastName.value}
            onChange={handleLastNameChange}
            validate={validateLastName}
            required
            placeholder="Doe"
            minLength={3}
            maxLength={20}
            errorMessage={formState.lastName.error}
          />
          <Input
            label="Age"
            name="age"
            value={formState.age.value}
            onChange={handleAgeChange}
            validate={validateAge}
            required
            placeholder="24"
            errorMessage={formState.age.error}
          />
          <Input
            label="Hobby"
            name="hobby"
            value={formState.hobby.value}
            onChange={handleHobby}
            validate={validateHobby}
            placeholder="Coding"
            errorMessage={formState.hobby.error}
          />
        </div>
        <div className="button-parent">
          <button className="button button-primary" type="submit">
            Make User
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
