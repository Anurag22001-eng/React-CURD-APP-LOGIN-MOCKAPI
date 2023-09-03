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
const inputHandler = (e)=>{
    setInputField({...inputField,[e.target.name]:e.target.value})
}

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');

    signup(inputField.username, inputField.password)
      .then((newUser) => {
        alert('You are successfully registered');
        navigate('/login');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <h2>Signup</h2>
       <LoginSignUpForm inputField={inputField} inputHandler={inputHandler} submitHandler={handleSignup}/>
      
      {error && <p>{error}</p>}
    </div>
  );
}

export default SignupPage;
