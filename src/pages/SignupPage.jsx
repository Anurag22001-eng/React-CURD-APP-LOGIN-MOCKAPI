import React, { useState } from 'react';
import { signup } from '../api/mockApi';
import { useNavigate } from 'react-router-dom';
import LoginSignUpForm from '../components/LoginSignUpForm';

function SignupPage() {
  const navigate = useNavigate();
  const [inputField,setInputField] = useState({
    username:'',
    password:''
})
const [error, setError] = useState('');
const [showPassword, setShowPassword] = useState(false);

const handleShowPassword = () => {
  setShowPassword(!showPassword);
};
const inputHandler = (e)=>{
    setInputField({...inputField,[e.target.name]:e.target.value})
}

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');

    signup(inputField.username, inputField.password)
      .then((newUser) => {
        alert(`${newUser.username} have successfully registered`);
        navigate('/login');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div style={{
        maxWidth: '300px', 
        margin: '0 auto', 
      }}>
      <h2>Signup</h2>
       <LoginSignUpForm inputField={inputField} inputHandler={inputHandler} submitHandler={handleSignup} showPassword={showPassword} handleShowPassword={handleShowPassword}/>
      
      {error && <p>{error}</p>}
    </div>
  );
}

export default SignupPage;
