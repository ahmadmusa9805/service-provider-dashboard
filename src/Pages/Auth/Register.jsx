import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  // Separate useState hooks
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    // const form = e.target;
    // const name = form.name.value;
    // const email = form.email.value;
    // const password = form.password.value;
    // console.log(name, email, password);
}

    return (
        <div>
     <div className="hero bg-base-200 min-h-screen">
      {/* <div className="hero-content flex-col lg:flex-col"> */}
        <div className="card bg-base-100 w-1/4  shadow-2xl py-8 ">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
          <form onSubmit={handleSubmit}  className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input type="text" className="input" placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
              <label className="fieldset-label">Email</label>
              <input type="email" className="input" placeholder="Email" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
              />
              <label className="fieldset-label">Password</label>
              <input type="password" className="input" placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <div><Link to="/login">have an account?</Link></div>
              <button type='submit' className="btn btn-neutral mt-4">register</button>
            </fieldset>
          </form>
        </div>
      {/* </div> */}
    </div>
        </div>
      );
};

export default Register;