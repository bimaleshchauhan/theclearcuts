import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import LayoutRoute from "./layout/LayoutRoute.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import BlogLayout from "./layout/BlogLayout"
// pages 
import Home from "./containers/Home.jsx";
import Aboutus from "./containers/aboutus.jsx"


class Routes extends Component {
    render() {
          return(
            <Router>
                <Switch>
                   <LayoutRoute
                        exact
                        path="/"
                        layout={MainLayout}
                        component={Home}
                        />
                    <LayoutRoute
                        exact
                        path="/aboutus"
                        layout={BlogLayout}
                        component={Aboutus}
                        />
                
               </Switch>
           </Router>
          )
    }
} 
export default Routes;