import React from 'react';
import Logo from './logo'
import Navbar from './navbar';
import Login from './login'
class Header extends React.Component {
    render(){
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
                           <Login /> 
                        </div>
                    </div> 
                </div>
            </header>
        )
    }
 }
 export default Header