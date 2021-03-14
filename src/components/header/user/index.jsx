import {useState} from 'react';
const User = (props)=>{
    const [check, setCheck] =useState(false);
   console.log(props.data);

    return(
        <div className="user-profile">
            <div className="user-name"><button className="text-btn" onClick={() => setCheck(!check)}><i className="fa fa-user-circle-o"></i></button></div> 
            {check?<div className="drop-down">
               <ul>
                   <li><a>User Profile</a> </li>
                   <li className="sign-out"><a >Sign out</a></li>
               </ul>
            </div>:''}
        </div>
    )
}
export default User;