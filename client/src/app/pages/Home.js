import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
////THIS FILE WILL BE USED FOR CREATING COMPONENTS THAT INITIALLY WILL BE USED IN THE root path: 'path='/' AKA the home page


///Basic Banner component used at top of all pages:
///You must have one default export per file.



export class Banner extends Component {

  

  render() {
    return (
    <div className="App">
      
      <div className="LivBan">
        <div />
      </div>
    </div>
    )
  }
}
  

export class Navigation extends Component{
  
  getUser(userId) {
    console.log(userId)
  }
  
  
  render(){
    return(
  <div className="App">
    
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
        
      </Link>

      <div>
          {
            [1, 2, 3, 4, 5].map(value => {
              return (
                <div key={value}>
                  <button onClick={() => this.getUser(value)}>{value}</button>
                </div>
              )
            })
          }
        </div>
  </div>
    
    )}

}

