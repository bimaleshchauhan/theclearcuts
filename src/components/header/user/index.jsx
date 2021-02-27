const user = (props)=>{
   console.log(props.data)

    return(
        <div className="user-profile">
            <div className="user-name"><a> <i class="bi bi-person-circle"></i></a></div> 
            <div className="drop-down">
               <ul>
                   <li><a>User Profile</a> </li>
                   <li className="sign-out"><a >Sign out</a></li>
               </ul>
            </div>
        </div>
    )
}
export default user;