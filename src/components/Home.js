import React, {Component} from 'react'
import { connect } from "react-redux"
import Question from '../components/Question';

class Home extends Component {
  state = {
    toggle: 'unanswered'
  }

  toggleBehavior = (event) => {
    this.setState({
      toggle: event.target.value
    })
  }
  
  render() {
    let {unansweredQuestions, answeredQuestions} = this.props;

    return (
      <div className="question-list">
          <button className='Button' id='answered' value='unanswered' onClick={this.toggleBehavior}>
              Unanswered QuestionList
          </button>
          <button className='Button' id='answered' value = 'answered' onClick={this.toggleBehavior}>
              Answered QuestionList
          </button><br /><br />

          {this.state.toggle === 'answered' ? (
            <div>
              <ul>
                  {answeredQuestions.map((id) => (
                  <li key={id}>
                    <Question id={id} />
                  </li>
                  ))}
                </ul>
            </div>):(
            <div>
              <ul>
                  {unansweredQuestions.map((id) => (
                  <li key={id}>
                    <Question id={id} />
                  </li>
                  ))}
              </ul>
            </div>)
          }
        </div>
      )
  }
}

function mapStateToProps({ questions, authUser, users}){
    
    const user = users[authUser]
    var answeredQuestions= user ? Object.keys(user['answers'])
    .sort((entryA, entryB) =>
      questions[entryB].timestamp - questions[entryA].timestamp):[];
    var unansweredQuestions= user ? Object.keys(questions)
    .filter(questionId => !(answeredQuestions.includes(questionId)))
        .sort((entryA, entryB) =>
      questions[entryB].timestamp - questions[entryA].timestamp):[];

    return{
        answeredQuestions,
        unansweredQuestions
    }
  }

export default connect(mapStateToProps)(Home);