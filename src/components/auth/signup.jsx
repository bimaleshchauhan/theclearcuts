import {useState} from 'react';
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions";
import axios from "axios"
const Signup = () => {
    
        const dispatch =useDispatch();
        const [fname, setFname] = useState("");
        const [lname, setLname] = useState("");
        const [email, setEmail] = useState("");
        const [mobile, setMobile] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit =(e) =>{
            e.preventDefault();
            // console.log("state", email)
            axios.post(process.env.REACT_APP_API_KEY+"/v1/api/user/sign_up",{
                firstName:fname,
                lastName:lname,
                phone:mobile,
                email:email,
                password:password
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
                            <input type="text" value={fname} onInput={e => setFname(e.target.value)} placeholder="Enter first name" id="fname" />
                        </div>  
                    </div>
                    <div className="emailid textbox">
                        <label>
                           Last Name
                        </label>
                        <div>
                            <input type="text" value={lname} onInput={e => setLname(e.target.value)} placeholder="Enter last name" id="lname" />
                        </div>  
                    </div>
                    <div className="emailid textbox">
                        <label>
                            Email
                        </label>
                        <div>
                            <input type="text" value={email} onInput={e => setEmail(e.target.value)} placeholder="Enter email" id="email_id" />
                        </div>  
                    </div>
                    <div className="emailid textbox">
                        <label>
                            Mobile
                        </label>
                        <div>
                            <input type="text" value={mobile} onInput={e => setMobile(e.target.value)} placeholder="Enter mobile" id="mobile" />
                        </div>  
                    </div>
                    <div className="password textbox">
                        <label>
                            Password
                        </label>
                        <div>
                            <input type="text" value={password} onInput={e => setPassword(e.target.value)} placeholder="Enter password" id="password" />
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