var users = [
  {id: 1, name: 'Abby'},
  {id: 2, name: 'Tyler'}
]

var questions = [
  {id: 1, question: 'When is the last time you cried?'},
  {id: 2, question: 'What is your relationship with your parents?'},
  {id: 3, question: 'When is the last time you felt proud of yourself?'}
]

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo" alt="logo"></div>
        <div className="sign-out">Sign Out</div>
      </div>
    );
  }
}

function Greeting(props) {
  return <h1 className="greeting">Hi, {props.name}.</h1>;
}

function Question(props) {
  return <h2 className="question">{props.question}</h2>;
}

class Welcome extends React.Component {
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

class App extends React.Component {
  constructor() {
    super();
    var questionIdx = 0;
    this.state = {
      questionIdx: questionIdx,
      question: questions[questionIdx]
    }
  }
  changeQuestion() {
    var questionIdx = (this.state.questionIdx + 1) % questions.length;
    this.setState({
      questionIdx: questionIdx,
      question: questions[questionIdx]
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Welcome user={users[0]} question={this.state.question} />
        <button onClick={this.changeQuestion.bind(this)}>Answer a different question</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
