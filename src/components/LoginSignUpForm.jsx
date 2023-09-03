import React from 'react'

function LoginSignUpForm({inputField,inputHandler,submitHandler}) {
  return (
    <form  onSubmit={submitHandler}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">User Name</label>
    <input name='username' onChange={inputHandler} value={inputField.username} type="text" className="form-control" id="usernameField" placeholder="Username"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input name='password' onChange={inputHandler} value={inputField.password} type="password" className="form-control" id="passwordField" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 
  )
}

export default LoginSignUpForm