import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LayoutRoute from "./layout/LayoutRoute.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import BlogLayout from "./layout/BlogLayout"
// pages 
import Home from "./containers/Home.jsx";
import Aboutus from "./containers/aboutus.jsx";
import Blogs from "./containers/blogs.jsx"

import CreateBlog from "./containers/create-blog.jsx";

import Error404 from "./containers/error/error404.jsx"


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
                    
                        <LayoutRoute
                        exact
                        path="/create-blog"
                        layout={MainLayout}
                        component={CreateBlog}
                        />
                       
                    

                        <LayoutRoute
                        exact
                        path={["/:id/","/:id/:sub_id"]}
                        layout={BlogLayout}
                        component={Blogs}
                        />  

                        <LayoutRoute
                        exact
                        path="/404"
                        layout={MainLayout}
                        component={Error404}
                        />
                        <LayoutRoute layout={MainLayout} component={Error404}/> 
                
               </Switch>
           </Router>
          )
    }
} 
export default Routes;