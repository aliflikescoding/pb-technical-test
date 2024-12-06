import { createSlice } from "@reduxjs/toolkit";

// Initial state structure
const initialState = {
  username: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  firstName: {
    value: "",
    error: "",
  },
  lastName: {
    value: "",
    error: "",
  },
  age: {
    value: "",
    error: "",
  },
  hobby: {
    value: "",
    error: "",
  },
  // You can easily extend this for more form fields
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // Action to update a specific field's value and clear its error
    updateField: (state, action) => {
      const { field, value, error } = action.payload;

      // If the field doesn't exist in the state, we'll create it
      if (!state[field]) {
        state[field] = { value: "", error: "" };
      }

      state[field].value = value;
      state[field].error = error || "";
    },

    // Action to set a specific field's error
    setFieldError: (state, action) => {
      const { field, error } = action.payload;

      // If the field doesn't exist in the state, we'll create it
      if (!state[field]) {
        state[field] = { value: "", error: "" };
      }

      state[field].error = error;
    },

    // Action to reset a specific field
    resetField: (state, action) => {
      const { field } = action.payload;

      if (state[field]) {
        state[field].value = "";
        state[field].error = "";
      }
    },

    // Action to reset entire form
    resetForm: (state) => {
      Object.keys(state).forEach((field) => {
        state[field].value = "";
        state[field].error = "";
      });
    },
  },
});

// Export actions and reducer
export const { updateField, setFieldError, resetField, resetForm } =
  formSlice.actions;

export default formSlice.reducer;
