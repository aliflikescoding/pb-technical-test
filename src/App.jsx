import "./App.css";
import Input from "./components/Input";
import { useSelector, useDispatch } from "react-redux";
import store from "./redux/store";
import { updateField } from "./redux/slices/slices"; // adjust path as needed

function App() {
  const dispatch = useDispatch();
  const usernameState = useSelector((state) => state.form.username);

  const handleInputChange = (e, error) => {
    const { value } = e.target;

    dispatch(
      updateField({
        field: "username",
        value,
        error,
      })
    );
  };

  // Validation function to be passed to Input
  const validateUsername = (value) => {
    if (value.includes("@")) {
      return "Username cannot contain @";
    }
    return "";
  };

  return (
    <>
      <div className="input-fields">
        <Input
          label="Username"
          name="username"
          value={usernameState.value}
          onChange={handleInputChange}
          validate={validateUsername}
          required
          placeholder="John Doe"
          minLength={3}
          maxLength={20}
          errorMessage={usernameState.error}
        />
      </div>
    </>
  );
}

export default App;
