import { useState } from "react";
import Input from "./components/Input";
import { useSelector, useDispatch } from "react-redux";
import store from "./redux/store";
import { updateField } from "./redux/slices/slices";
import { FaBox } from "react-icons/fa";

function App() {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);
  const [filled, setFilled] = useState(false);

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
    setFilled(true);
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
      {!filled && (
        <div className="wrapper">
          <div className="app-container">
            <div className="app-container-left">
              <div className="left-content">
                <div>
                  <p className="text-logo">
                    <FaBox />
                    Purple Box
                  </p>
                  <p className="text-make">Make your account now.</p>
                  <p className="text-make-small">
                    Welcome back your user now. fill in your information bellow.
                  </p>
                </div>
                <div>
                  <div className="social-container">
                    <div className="social-button">
                      <img src="./google.png" alt="google image" />
                      Google
                    </div>
                    <div className="social-button">
                      <img src="./facebook-logo.png" alt="google image" />
                      Facebook
                    </div>
                  </div>
                </div>
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
                      placeholder="Johndoe24_"
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
                <div>
                  <p>
                    Don&apos;t have a user?{" "}
                    <a style={{ color: "var(--primary)" }}>Make one now!</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="app-container-right">
              <img src="/user-svg.svg" alt="pen svg art" />
              <h1 className="text-right">
                Connect your playlists with every application
              </h1>
              <p className="text-p-right">
                {" "}
                easily customize your playlist with our simple application
              </p>
            </div>
          </div>
        </div>
      )}
      {filled && (
        <div className="relative overflow-hidden w-[100vw] h-[100vh]">
          <div className="flex items-center justify-center w-full h-full">
            <div className="transform transition-all duration-500 slide-up-animation border p-8 rounded-md shadow-md mx-4">
              <h1 className="font-bold text-2xl">
                Here is the user data that registered
              </h1>
              <div className="mt-2 text-lg font-medium">
                <p>username : {formState.username.value}</p>
                <p>email : {formState.email.value}</p>
                <p>first name : {formState.firstName.value}</p>
                <p>last name : {formState.lastName.value}</p>
                <p>age : {formState.age.value}</p>
                {formState.hobby.value !== "" ? (
                  <p>hobby : {formState.hobby.value}</p>
                ) : (
                  <p className="text-red-500">
                    This user does not have a hobby
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0">
            <div className="scroll-container">
              <div className="scroll-content">
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0">
            <div className="scroll-container">
              <div className="scroll-content">
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
                <p className="text-[var(--primary)] text-2xl flex items-center gap-2 font-bold my-2">
                  <FaBox />
                  Purple Box
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
