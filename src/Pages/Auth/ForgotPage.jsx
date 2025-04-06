import React from 'react';

const ForgotPage = () => {
    return (
        <div>
     <div className="hero bg-base-200 min-h-screen">
      {/* <div className="hero-content flex-col lg:flex-col"> */}
        <div className="card bg-base-100 w-1/4  shadow-2xl py-8 ">
            <h1 className="text-2xl font-bold text-center">Forgot Password Page!</h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <button className="btn btn-neutral mt-4">Submit</button>
            </fieldset>
          </div>
        </div>
      {/* </div> */}
    </div>
        </div>
      );
};

export default ForgotPage;