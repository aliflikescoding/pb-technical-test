import { useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  const [formData, setFormData] = useState({ username: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateUsername = (value) => {
    if (value.includes('@')) {
      return 'Username cannot contain @';
    }
    return '';
  };

  return (
    <>
      <Input
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        validate={validateUsername}
        required
        placeholder='John Doe'
        minLength={3}
        maxLength={20}
      />
    </>
  );
}

export default App;
