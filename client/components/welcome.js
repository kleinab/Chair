import React, { Component } from 'react';


function Greeting(props) {
  return <h1 className="greeting">Hi, {props.name}.</h1>;
}

function Question(props) {
  return <h2 className="question">{props.question}</h2>;
}

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <Greeting name={this.props.user.name} />
        <Question question={this.props.question.question} />
        <div className="text-box" contentEditable="true"></div>
        <div className="submit">Submit</div>
      </div>
    );
  }
}
