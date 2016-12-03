var users = [
  {id: 1, name: 'Abby'},
  {id: 2, name: 'Tyler'}
]

var questions = [
  {id: 1, question: 'When is the last time you cried?'},
  {id: 2, question: 'What is your relationship with your parents?'},
  {id: 3, question: 'When is the last time you felt proud of yourself?'}
]

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <div className="logo" alt="logo"></div>
        <div className="sign-out">Sign Out</div>
      </div>
    )
  }
});

function Greeting(props) {
  return <h1 className="greeting">Hi, {props.name}.</h1>;
}

function Question(props) {
  return <h2 className="question">{props.question}</h2>;
}

var Welcome = React.createClass({
  render: function() {
    return (
      <div className="welcome">
        <Greeting name={this.props.user.name} />
        <Question question={this.props.question.question} />
        <div className="text-box" contentEditable="true"></div>
        <div className="submit">Submit</div>
      </div>
    )
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Welcome user={users[0]} question={questions[1]} />
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
