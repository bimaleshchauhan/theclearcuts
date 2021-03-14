import { useDispatch } from "react-redux";
import { login, signup } from "../../store/actions";
const Login = () =>{
    const dispatch =useDispatch();
    
    return(
        <div className="login-details">
            <div className="login"><button onClick={() => dispatch(login(true))}>Log in</button></div>
            <div className="signup"><button onClick={() => dispatch(signup(true))}>Sign up</button></div>
        </div>
    )
}
export default Login;