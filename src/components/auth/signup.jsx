import {useState} from 'react';
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions";
import FormUser from "../../hoc/FormUser"
import validator from "../../hoc/Validator"
import axios from "axios"
const Signup = () => {
    
    const form =[
        {
            type:"fname",
            required:true,
            value:"",
            validate:[
                {
                    name:'required',
                    message:'First name is required'
                },
                
            ]
        },
        {
            type:"lname",
            required:true,
            value:"",
            validate:[
                {
                    name:'required',
                    message:'Last name is required'
                },
               
            ]
        },
        {
            type:"mobile",
            required:true,
            value:"",
            validate:[
                {
                    name:'required',
                    message:'Mobile number is required'
                },
               
            ]
        },
        {
            type:"email",
            required:true,
            value:"",
            validate:[
                {
                    name:'required',
                    message:'Email address is required'
                },
                {
                    name:'regex',
                    message:'Email address is invalid',
                    expression:'/^([A-Za-z0-9]+[_.]?)+[A-Za-z0-9]+@[a-zA-Z_]+?([.][a-zA-Z]{2,3}){1,2}$/'
                },
            ]
        },
        {
            type:"password",
            required:true,
            value:"",
            validate:[
                {
                    name:'required',
                    message:'Password is required'
                },
               
            ]
        }
    ]

    const {
        values,
        errors,
        validation,
        handleChange,
        handleSubmit,
      } = FormUser(signupSubmit, validator, form);

        const dispatch =useDispatch();
       

        function signupSubmit(){
           // e.preventDefault();
            // console.log("state", email)
            axios.post(process.env.REACT_APP_API_KEY+"/v1/api/user/sign_up",{
                firstName:values.fname,
                lastName:values.lname,
                phone:values.mobile,
                email:values.email,
                password:values.password
            }).then(response =>{
                if(response.data.success){
                    dispatch(signup(false)) 
                }
                
                //console.log("response", response)
            })
        }
        return(
            <div className="login-page">
            <div className="login">
               <div className="header-close"><button onClick={() => dispatch(signup(false))}>✖</button></div>   
                <div className="logo-icon">
                     TheClearCuts  
                </div>
                <form onSubmit={handleSubmit}>
                   <div className="emailid textbox">
                        <label>
                            First Name
                        </label>
                        <div>
                            <input type="text" name="fname" value={values.fname || ''} onInput={handleChange} placeholder="Enter first name" id="fname" />
                            {errors.fname && (
                            <p className="help is-danger">{errors.fname}</p>
                        )}
                        </div>  
                    </div>
                    <div className="emailid textbox">
                        <label>
                           Last Name
                        </label>
                        <div>
                            <input type="text" name="lname" value={values.lname || ''} onInput={handleChange} placeholder="Enter last name" id="lname" />
                            {errors.lname && (
                            <p className="help is-danger">{errors.lname}</p>
                        )}
                        </div>  
                    </div>
                    <div className="emailid textbox">
                        <label>
                            Email
                        </label>
                        <div>
                            <input type="text" name="email" value={values.email || ''} onInput={handleChange} placeholder="Enter email" id="email_id" />
                            {errors.email && (
                            <p className="help is-danger">{errors.email}</p>
                        )}
                        </div>  
                    </div>
                    <div className="emailid textbox">
                        <label>
                            Mobile
                        </label>
                        <div>
                            <input type="text" name="mobile" value={values.mobile || ''} onInput={handleChange} placeholder="Enter mobile" id="mobile" />
                            {errors.mobile && (
                            <p className="help is-danger">{errors.mobile}</p>
                        )}
                        </div>  
                    </div>
                    <div className="password textbox">
                        <label>
                            Password
                        </label>
                        <div>
                            <input type="text" name="password" value={values.password || ''} onInput={handleChange} placeholder="Enter password" id="password" />
                            {errors.password && (
                            <p className="help is-danger">{errors.password}</p>
                        )}
                        </div>  
                    </div>
                    <div className="submit-btn textbox">
                        <div>
                            <input type="submit" value="Sign up" id="Signup" />
                        </div>  
                    </div>
                </form>
            </div>
            </div>
        )
    
}
export default Signup