import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import {postPost} from '../../services'

import { useHistory } from "react-router-dom";

export default function Form({name,email,password,onChangeUsername,onChangePassword,onChangeEmail}) {


  const history = useHistory();

   const handleSubmit = (event) => {
     event.preventDefault();
     
	postPost({email, password})
//      setTimeout(() => {
//        history.push("/");
//      }, 1000);
 };


  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
          <div className="col p-5">
            <h2 className="text-white">Log In</h2>
            <form className="mt-5" onSubmit={handleSubmit}>
	    <div className="form-group col-12">
                <label className="text-white" htmlFor="exampleInputEmail1">
		Username
                </label>
		<CustomInput 
		type='text'
		id='name'
		value={name}
		callback={onChangeUsername}
		placeholder='username'
		/>
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="exampleInputEmail1">
                  Email address
                </label>
		<CustomInput 
		type='text'
		id='email'
		value={email}
		callback={onChangeEmail}
		placeholder='email'
		/>
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="exampleInputPassword1">
                  Password
                </label>
		<CustomInput 
		type='password'
		id='pass'
		value={password}
		callback={onChangePassword}
		placeholder='password'
		/>
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
