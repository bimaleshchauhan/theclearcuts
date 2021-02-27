
import './App.scss';



import Routes from "./routes";
import Login from "./components/auth/login";
import Signup from './components/auth/signup'
import { useSelector } from "react-redux";




function App() {
  const auth = useSelector(state =>{
        return state.auth
    }
  );
  
  return (
    <div className="App">
         <Routes />
         {auth.login_popup==true? <div><Login /><div className="overloap"></div></div>:""}
         {auth.signup==true? <div><Signup /><div className="overloap"></div></div>:""}
         
    </div>
  );
}

 


export default App;
