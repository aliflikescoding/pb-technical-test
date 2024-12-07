# React - Purple Box Form

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Reusable Input Component

## Overview

The `Input` component is a flexible, customizable React input component that provides built-in validation, error handling, and supports both controlled and uncontrolled input modes.

## Features

- 🔧 Supports multiple input types
- ✅ Built-in validation
- 🎨 Customizable with props
- 💡 Controlled and uncontrolled input modes
- 🚨 Error message handling

## Props

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | `string` | `"text"` | Input type (text, email, password, number, etc.) |
| `label` | `string` | `undefined` | Label text for the input |
| `onChange` | `function` | *required* | Callback function triggered on input change |
| `placeholder` | `string` | `""` | Placeholder text |
| `value` | `string` | `undefined` | Controlled input value |
| `validate` | `function` | `undefined` | Custom validation function |
| `errorMessage` | `string` | `undefined` | Custom error message |
| `required` | `boolean` | `false` | Makes the input required |
| `minLength` | `number` | `undefined` | Minimum input length |
| `maxLength` | `number` | `undefined` | Maximum input length |

## Usage Examples

### Basic Usage
```jsx
import Input from './Input';

function MyForm() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Input 
      type="email"
      label="Email Address"
      value={email}
      onChange={handleChange}
      required
    />
  );
}
```

### Custom Validation
```jsx
<Input 
  label="Username"
  validate={(value) => {
    if (value.includes(' ')) {
      return 'Username cannot contain spaces';
    }
  }}
  onChange={handleChange}
/>
```

### Uncontrolled Input
```jsx
<Input 
  label="Search"
  type="search"
  placeholder="Search something..."
  onChange={(e) => console.log(e.target.value)}
/>
```

## Validation Behavior

The component performs the following validations:
- Required field check
- Minimum length validation
- Maximum length validation
- Custom validation function support

## Error Handling

- Built-in error messages for standard validations
- Support for custom error messages
- Error messages are displayed below the input

## Accessibility

- Supports standard HTML input attributes
- Provides clear error messaging
- Compatible with form libraries and validation frameworks
