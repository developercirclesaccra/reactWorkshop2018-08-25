import React from 'react';
import './Question.css'
const questions = (props) => {
    return(
        <span>
        <h3>Survey Questions</h3>
        <form onSubmit={props.sendToServer}>
          <div>
            <label>What is your favorite operating system?</label><br />
            <input type="radio" name="q1" value="Windows" onChange={props.selected} />Windows<br />
            <input type="radio" name="q1" value="OSX" onChange={props.selected} />OSX<br />
            <input type="radio" name="q1" value="Linux" onChange={props.selected} />Linux<br />
            <input type="radio" name="q1" value="Solaris" onChange={props.selected} />Solaris<br />
            <input type="radio" name="q1" value="Other" onChange={props.selected} />Other<br />
          </div>
          <div>
          <label>What is your favorite brand of TV?</label><br />
          <input type="radio" name="q2" value="Sony" onChange={props.selected} />Sony<br />
          <input type="radio" name="q2" value="Samsung" onChange={props.selected} />Samsung<br />
          <input type="radio" name="q2" value="Panasonic" onChange={props.selected} />Green<br />
          <input type="radio" name="q2" value="Vizio" onChange={props.selected} />Vizio<br />
          <input type="radio" name="q2" value="Other" onChange={props.selected} />Other<br />
        </div>
        <div>
          <label>What is your favorite Smartphone Brand?</label><br />
          <input type="radio" name="q3" value="Morning" onChange={props.selected} />Apple<br />
          <input type="radio" name="q3" value="Afternoon" onChange={props.selected} />Samsung<br />
          <input type="radio" name="q3" value="Evening" onChange={props.selected} />Nexus<br />
          <input type="radio" name="q3" value="Night" onChange={props.selected} />Blackberry<br />
          <input type="radio" name="q3" value="Other" onChange={props.selected} />Other<br />
        </div>
        <div>
          <label>What is your favorite CPU Brand?</label><br />
          <input type="radio" name="q4" value="Intel" onChange={props.selected} />Intel<br />
          <input type="radio" name="q4" value="AMD" onChange={props.selected} />AMD<br />
          <input type="radio" name="q4" value="Nvidia" onChange={props.selected} />Nvidia<br />
          <input type="radio" name="q4" value="ARM" onChange={props.selected} />ARM<br />
          <input type="radio" name="q4" value="Other" onChange={props.selected} />Other<br />
        </div>
        <input disabled={props.cannotSubmit} className="Button" type="submit" value="Submit" />
        </form>
      </span>
    )
}

export default questions;