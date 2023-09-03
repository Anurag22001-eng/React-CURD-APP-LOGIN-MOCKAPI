import React from 'react'

function LoginSignUpForm({ inputField, inputHandler, submitHandler,showPassword,handleShowPassword }) {
    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">User Name</label>
                <input name='username' onChange={inputHandler} value={inputField.username} type="text" className="form-control" id="usernameField" placeholder="Username" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <div className="input-group">
                    <input
                        name="password"
                        onChange={inputHandler}
                        value={inputField.password}
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        id="passwordField"
                        placeholder="Password"
                    />
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleShowPassword}
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default LoginSignUpForm