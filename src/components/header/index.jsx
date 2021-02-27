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
    const user = useSelector(state =>{
        return state.auth    
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
                       {user.user_details && user.user_details.success==true?<User data={user.user_details} />:<Login />} 
                    </div>
                </div> 
            </div>
        </header>
    )
}
 export default Header