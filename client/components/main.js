import React, { Component } from 'react';
import Data from '../data.js';
import Welcome from './welcome.js';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo" alt="logo"></div>
        <div className="sign-out">Sign Out</div>
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
    var questionIdx = 0;
    this.state = {
      questionIdx: questionIdx,
      question: Data.questions[questionIdx],
    }
  }

  changeQuestion() {
    var questionIdx = (this.state.questionIdx + 1) % questions.length;
    this.setState({
      questionIdx: questionIdx,
      question: Data.questions[questionIdx],
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Welcome user={Data.users[0]} question={this.state.question} />
        <button onClick={this.changeQuestion.bind(this)}>Answer a different question</button>
      </div>
    );
  }
}
