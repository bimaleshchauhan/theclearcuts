const Navbar = (props) =>{
    return(
        <div className="menu">
           
           <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                
                <li className="nav-item">
                    <a className="nav-link" href="/aboutus">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About story</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/create-blog">Write</a>
                </li>
                {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li> */}
               
                </ul>
               
               </div>
            </nav>
        </div>
    )
}
export default Navbar