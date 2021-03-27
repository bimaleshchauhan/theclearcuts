import {useState} from 'react';
import { useDispatch } from "react-redux";
import { login, userDetails } from "../../store/actions";
import FormUser from "../../hoc/FormUser"
import validator from "../../hoc/Validator"
import axios from "axios"



const Login = () => {

    const form =[
        {
            type:"email",
            required:true,
            value:"",
            validate:[
                {
                    name:'required',
                    message:'Email address is required'
                },
                // {
                //     name:'regex',
                //     message:'Email address is invalid',
                //     expression:'^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                // },
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
                }
            ]
        }
    ]

    const {
        values,
        errors,
        validation,
        handleChange,
        handleSubmit,
      } = FormUser(loginSubmit, validator, form);

   
   // const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    const dispatch =useDispatch();
    function loginSubmit(e){
         //e.preventDefault();
         axios.post(process.env.REACT_APP_API_KEY+"/v1/api/user/sign_in",values).then(response =>{
            if(response.data.success){
                dispatch(userDetails(response.data))
                dispatch(login(false)) 

            }
         })
    }
    return(
     <div className="login-page">
        <div className="login">
            <div className="header-close"><button onClick={() => dispatch(login(false))}>✖</button></div>   
            <div className="logo-icon">
                    TheClearCuts  
            </div>
            <form onSubmit={handleSubmit}>
                <div className="emailid textbox">
                    <label>
                        Email
                    </label>
                    <div>
                        <input type="text" name="email" value={values.email || ''} onChange={handleChange} placeholder="Enter email" id="email_id" />
                        {errors.email && (
                            <p className="help is-danger">{errors.email}</p>
                        )}
                    </div>  
                </div>
                <div className="password textbox">
                    <label>
                        Password
                    </label>
                    <div>
                        <input type="password" name="password" value={values.password || ''}  onInput={handleChange} placeholder="Enter password" id="password" />
                        {errors.password && (
                            <p className="help is-danger">{errors.password}</p>
                        )}
                    </div>  
                </div>
                <div className="submit-btn textbox">
                    <div>
                        <input type="submit" value="Submit" id="submitbtn" />
                    </div>  
                </div>
            </form>
        </div>
    </div>
    )
    
}

export default Login