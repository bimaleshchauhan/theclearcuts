import React, { Component } from 'react';
import Index from '../components/homepage'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = { attribute : "value" }
    }
    render() {
          return(
              <div className="Homepage ">
                 <Index />
              </div>
          )
    }
} 
export default Home;