import React from 'react';
import './User.css'
const user = (props) =>(
  <span>
    <h2>Please enter your name to begin the survey</h2>
      <form onSubmit={props.submit}>
        <input type="text" placeholder="Enter Name..." onChange={props.changed}/>
        <br/>
        <button className="Button">Continue</button>
     </form>        
  </span>
);
export default user;