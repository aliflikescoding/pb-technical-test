# Purple Box - User Registration Form

A responsive React form application with seamless validation and dynamic styling using both CSS and Tailwind.

## 🚀 Features

- Custom form validation for all input fields
- Responsive design across all devices
- Redux state management
- Dual styling approach (CSS + Tailwind)
- Animated success page
- Social login options (UI only)

## 💻 Desktop Version SVG

The desktop version features a custom SVG illustration that adapts to different screen sizes:

1. Created using a vector graphics editor
2. Saved as an optimized SVG file
3. Placed in the public folder as `user-svg.svg`
4. Implemented responsively using CSS media queries
5. Auto-scales while maintaining aspect ratio

## 🎨 Styling Architecture

### Pre-submission Form (Plain CSS)
- Used traditional CSS for the initial form layout
- Implemented a two-column layout using CSS Grid
- Custom styling for form inputs and validation states
- Responsive breakpoints for different screen sizes
- CSS variables for consistent theming

### Post-submission Display (Tailwind)
- Switched to Tailwind CSS for the success page
- Utilized Tailwind's utility classes for quick styling
- Implemented animated scroll containers
- Responsive text sizing and spacing
- Flexible container layouts

## ✅ Form Validation

Frontend validation includes:

- Username: Letters, numbers, underscore, and hyphen only
- Email: Must contain @ and .com
- First/Last Name: Letters only
- Age: Number between 1-100
- Hobby: Optional, max 10 characters, letters only

Validation features:
- Real-time error messages
- Input field highlighting
- Submit button state management
- Redux store updates

# 📱 Responsive Design Guide

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Fluid typography
- Flexible layouts
- Conditional rendering for different screen sizes

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
