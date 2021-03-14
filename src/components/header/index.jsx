import React, {useEffect, useState} from 'react';
import Logo from './logo'
import Navbar from './navbar';
import Login from './login';
import User from './user'
import { useSelector } from "react-redux";


// const userProfile = () => {
//     if(this.user.user_details==""){
//         return <Login />
//       }
//       else if(this.user.user_details.success===true){
//           return <User />
//       }
//   }

const Header = () => {
    const [detail, setDetails] = useState("")
    const user = useSelector(state =>{
        return state.auth.user_details   
    })
    useEffect(() =>{
        if(user){
            setDetails(user);
            localStorage.setItem("user_details", user);
        }
        else{
          setDetails(localStorage.getItem("user_details"))
        }
    })

   
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Logo />
                    </div>
                    <div className="col-8">
                        <Navbar />
                    </div>
                    <div className="col-2">
                       {detail && detail.success==true?<User data={detail} />:<Login />} 
                    </div>
                </div> 
            </div>
        </header>
    )
}
 export default Header