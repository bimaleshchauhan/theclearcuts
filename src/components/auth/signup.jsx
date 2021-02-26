import React from 'react';
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions";
import axios from "axios"
const Signup = () => {
    
          const dispatch =useDispatch();
   
        return(
            <div className="login-page">
            <div className="login">
               <div className="header-close"><a onClick={() => dispatch(signup(false))}>✖</a></div>   
                <div className="logo-icon">
                     TheClearCuts  
                </div>
                <form>
                <div className="emailid textbox">
                        <label>
                            Name
                        </label>
                        <div>
                            <input type="text" placeholder="Enter Name" id="name" />
                        </div>  
                    </div>
                    <div className="emailid textbox">
                        <label>
                            Email
                        </label>
                        <div>
                            <input type="text" placeholder="Enter email" id="email_id" />
                        </div>  
                    </div>
                    <div className="password textbox">
                        <label>
                            Password
                        </label>
                        <div>
                            <input type="text" placeholder="Enter password" id="password" />
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