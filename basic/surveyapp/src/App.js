import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User/User';
import Questions from './components/Questions/Questions'
class App extends Component {
  state = {
      name:'',
      answers: {
          q1:'',
          q2:'',
          q3:'',
          q4:''
      },
      start:false,
      submitted: false
  }

  handleNameChange = (event) =>{
    let name = event.target.value;
    this.setState({name: name});
  }

  handleRegisterSubmit = (event) => {
    this.state.name.length > 0 ? this.setState({start: true}): alert("Fill in the form")
    event.preventDefault();
  }

  handleQuestionSubmit = (event) =>{
      if(this.state.answers.q1 !=='' && this.state.answers.q2 !=='' && this.state.answers.q3 !==''  && this.state.answers.q4 !=='' ) {
          const replies = {
             name:  this.state.name,
             anwers:  this.state.answers,
          }
          axios.post("https://workshop-1c92b.firebaseio.com/replies.json", replies)
            .then(() => {
              this.setState({submitted:true})
            })
            .catch(err=> alert(err))
      }else{
          alert("Questions must be fully completed before submitting");
      }
      event.preventDefault();
  }

  handleQuestionChange = (event) =>{
      let answers = {...this.state.answers};
        if(event.target.name === 'q1'){
          answers.q1 = event.target.value;
        } else if(event.target.name === 'q2'){
          answers.q2 = event.target.value;
        } else if(event.target.name === 'q3'){
          answers.q3 = event.target.value;
        } else if(event.target.name === 'q4'){
          answers.q4 = event.target.value;
        }
    this.setState({answers:answers}, () =>{
      console.log(this.state);
    });
  }

  render() {
    let output = 
          <User  
            changed={this.handleNameChange}
            submit={this.handleRegisterSubmit}
          />
    if(this.state.name && this.state.start){
      output = <span>
                   <h2>Welcome {this.state.name}</h2>
                   <Questions
                      cannotSubmit={this.state.fullyAnswerred}
                      selected={this.handleQuestionChange}
                      sendToServer={this.handleQuestionSubmit}
                   />
              </span>
    } else if(this.state.submitted){
        output = <h1>Thank you {this.state.name}  for completing the survey</h1>
    }
    return (
      <div className="App">
        <div className="App-header text-center">
          <h2>SimpleSurvey</h2>
        </div>
        <div className="container">
          {output}
        </div>
      </div>
    );
  }
}

export default App;
