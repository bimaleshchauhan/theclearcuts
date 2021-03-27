import React from 'react';
import { Route  } from 'react-router-dom';



 const LayoutRoute = ({component:Component,layout:Layout, ...rest}) => (
     
    <Route {...rest} render = {props => {
        console.log("fdsfsd", rest)
        console.log("props", props)
         return <Layout><Component {...props} /></Layout>
      
    }
    } />
 )

 export default LayoutRoute;
