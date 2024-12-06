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
    
    console.log('Complete Redux Form State:', formState);
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
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}

export default App;
