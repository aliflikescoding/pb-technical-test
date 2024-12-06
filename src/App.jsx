import "./App.css";
import Input from "./components/Input";
import { useSelector, useDispatch } from "react-redux";
import store from "./redux/store";
import { updateField } from "./redux/slices/slices"; // adjust path as needed

function App() {
  const dispatch = useDispatch();
  const usernameState = useSelector((state) => state.form.username);
  const emailState = useSelector((state) => state.form.email);
  const firstNameState = useSelector((state) => state.form.firstName);
  const lastNameState = useSelector((state) => state.form.lastName);
  const ageState = useSelector((state) => state.form.age);
  const hobbyState = useSelector((state) => state.form.hobby);

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
      <form>
        <div className="input-fields">
          <Input
            label="Username"
            name="username"
            value={usernameState.value}
            onChange={handleInputUsernameChange}
            validate={validateUsername}
            required
            placeholder="John Doe"
            minLength={3}
            maxLength={20}
            errorMessage={usernameState.error}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={emailState.value}
            onChange={handleInputEmailChange}
            validate={validateEmail}
            required
            placeholder="johndoe@gmail.com"
            minLength={3}
            maxLength={20}
            errorMessage={emailState.error}
          />
          <Input
            label="First Name"
            name="firstName"
            value={firstNameState.value}
            onChange={handleFirstNameChange}
            validate={validateFirstName}
            required
            placeholder="John"
            minLength={3}
            maxLength={20}
            errorMessage={firstNameState.error}
          />
          <Input
            label="Last Name"
            name="lastName"
            value={lastNameState.value}
            onChange={handleLastNameChange}
            validate={validateLastName}
            required
            placeholder="Doe"
            minLength={3}
            maxLength={20}
            errorMessage={lastNameState.error}
          />
          <Input
            label="Age"
            name="age"
            value={ageState.value}
            onChange={handleAgeChange}
            validate={validateAge}
            required
            placeholder="24"
            errorMessage={ageState.error}
          />
          <Input
            label="Hobby"
            name="hobby"
            value={hobbyState.value}
            onChange={handleHobby}
            validate={validateHobby}
            placeholder="Coding"
            errorMessage={hobbyState.error}
          />
        </div>
      </form>
    </>
  );
}

export default App;
