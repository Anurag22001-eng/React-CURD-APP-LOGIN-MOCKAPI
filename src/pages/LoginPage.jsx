
import React, { useState } from 'react';
import { login } from '../api/mockApi';
import { useNavigate } from 'react-router-dom';
import LoginSignUpForm from '../components/LoginSignUpForm';
function LoginPage({handleAccessToken}) {
    const navigate = useNavigate()
    const [inputField,setInputField] = useState({
        username:'',
        password:''
    })
    const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
    const [error, setError] = useState('');
    const inputHandler = (e)=>{
        setInputField({...inputField,[e.target.name]:e.target.value})
    }

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    login(inputField.username, inputField.password)
      .then((response) => {
        const { user, accessToken } = response;
        localStorage.setItem('accessToken',accessToken)
        handleAccessToken()
        alert(`${user.username} have succecssfully logged in`)
        navigate('/')
        
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
      <h2>Login</h2>
      <LoginSignUpForm inputField={inputField} inputHandler={inputHandler} submitHandler={handleLogin} showPassword={showPassword} handleShowPassword={handleShowPassword}/>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;
