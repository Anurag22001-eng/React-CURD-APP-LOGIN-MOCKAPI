import React from 'react'

function InputForm({inputHandler,submitButton,inputField}) {
  return (
    <form onSubmit={submitButton}>
    <div className="form-row">
      <div className="col-md-4 mb-3">
        <label htmlFor="validationDefault01">Username</label>
        <input value={inputField.name} name="name" type="text" className="form-control" id="validationDefault01" placeholder="First name" onChange={inputHandler} required/>
      </div>
      <div className="col-md-4 mb-3">
      <label htmlFor="exampleInputEmail1">Email address</label>
    <input value={inputField.email} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={inputHandler} placeholder="Enter email"/>
    </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="validationDefault02">Phone no</label>
        <input value={inputField.phone} name="phone" type="number" className="form-control" id="validationDefault02" onChange={inputHandler} placeholder="Phone no"  required/>
      </div>
    <button className="btn btn-primary" type="submit" >Submit form</button>
    </div>
  </form>
  )
}

export default InputForm