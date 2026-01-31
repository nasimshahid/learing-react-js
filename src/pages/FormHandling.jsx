import React, { useState } from "react";

function FormHandling() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

    const handleNameChange=(e) => setName(e.target.value);
        
    
function handleSubmit(e){
    e.preventDefault();
    let obj={
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword
    }


    if (name===""||email===""||password===""||confirmPassword==="") {

        alert("Please fill all the fields");
        return;
    }else if(password!==confirmPassword){
        alert("Password and Confirm Password do not match");
        return;
    }
    else{
            console.log(obj);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
        alert("Form submitted successfully!");

    }
}
    
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-5">
        <div className="card border-0 shadow-lg rounded-4 p-4">
          
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="fw-bold">Create Account</h2>
            <p className="text-muted">
              Join us and start your premium experience
            </p>
          </div>

          {/* Form */}
          <form>
            {/* Name */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-3"
                placeholder="Enter your name"
                onChange={handleNameChange}
                value={name}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                className="form-control form-control-lg rounded-3"
                placeholder="Enter your email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control form-control-lg rounded-3"
                placeholder="Create password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Confirm Password</label>
              <input
                type="password"
                className="form-control form-control-lg rounded-3"
                placeholder="Confirm password"
                onChange={(e)=>setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>

            {/* Button */}
            <div className="d-grid">
              <button className="btn btn-dark btn-lg rounded-3" onClick={handleSubmit}> 
                Sign Up
              </button>
            </div>

            {/* Footer */}
            <p className="text-center text-muted mt-4 mb-0">
              Already have an account?{" "}
              <span className="fw-semibold text-dark" style={{ cursor: "pointer" }}>
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormHandling;
