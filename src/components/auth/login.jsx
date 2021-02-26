import {useState} from 'react';
import { useDispatch } from "react-redux";
import { login } from "../../store/actions";
import axios from "axios"


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch =useDispatch();
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        // console.log("state", email)
         axios.post("http://13.232.108.235:1337/api/sign_in",{
            email:email,
            password:password
         }).then(response =>{
             console.log("response", response)
         })
    }
    return(
        <div className="login-page">
        <div className="login">
            <div className="header-close"><a  onClick={() => dispatch(login(false))}>✖</a></div>   
            <div className="logo-icon">
                    TheClearCuts  
            </div>
            <form onSubmit={handleSubmit}>
                <div className="emailid textbox">
                    <label>
                        Email
                    </label>
                    <div>
                        <input type="text" value={email} onInput={e => setEmail(e.target.value)} placeholder="Enter email" id="email_id" />
                    </div>  
                </div>
                <div className="password textbox">
                    <label>
                        Password
                    </label>
                    <div>
                        <input type="password" value={password} onInput={e => setPassword(e.target.value)} placeholder="Enter password" id="password" />
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