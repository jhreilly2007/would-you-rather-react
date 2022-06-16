import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAssocAnswerWithUser} from '../actions/users';
import PageNotFound from './PageNotFound';
import Navigation from './NavigationBar';

class QuestionById extends Component {

  handleAnswer = answer =>(event) =>{
  const id = this.props.passedId
  const authUser = this.props.user.id

  this.props.dispatch(handleAssocAnswerWithUser(authUser, id, answer));
}
  
  render() {
    const {answered, author, authUser, userAnswer, question,
      answer1, answer2, vote1, vote2, avatar, passedId, invalidQuestion} = this.props
  
    if (invalidQuestion) {
      return (
        <div className='question-page'>
          <Navigation />
          <PageNotFound />
        </div>
      );
    }

    return(
      <div>
        <h2>{author} wants to know...</h2>
        <img src={avatar} alt = {`Avatar of ${author}`}/>
        <h3> Would you Rather...</h3>
        {
          answered && (
            <>
            <div>
              <div>
                <br />
                <h4>Option 1 : {answer1}</h4>
                <h5>Votes: </h5>
                <h5>{vote1} Votes of a Total {vote1 + vote2} Vote(s) Received</h5>
                <h5>Received {((vote1*100) /(vote1 + vote2))}% of Votes</h5>
              </div>
              <div>
                <br />
                <h4>Option 2 : {answer2}</h4>
                <h5>Votes: </h5>
                <h5>{vote2} Votes of a Total {vote1 + vote2} Vote(s) Received</h5>
                <h5>Received {((vote2*100) /(vote1 + vote2))}% of Votes</h5>
                <br />
              </div>
              <div>
                <h4>{authUser} you selected: {userAnswer}</h4>
                <br />
              </div>
          </div></>)
        }
        {
          !answered && (
            <div>
            <button className="Button" onClick={this.handleAnswer('optionOne')}>
              {answer1}
            </button>
            <button className="Button" onClick={this.handleAnswer('optionTwo')}>
              {answer2}
            </button>
            <br /><br />
          </div>)
        }
        </div>
      )
  }
}

const mapStateToProps =({ users, questions, authUser}, props)=>{
    var passedId = props.match.params.id;
    var user = users[authUser]
    const question = questions[passedId]
    const invalidQuestion = question ? false : true;
    const answered = Object.keys(users[authUser]['answers']).includes(passedId)
    const userAnswer =  answered ? users[authUser]['answers'][passedId] : '';
   
    return{
      invalidQuestion,
      user,
      passedId, 
      authUser,
      question,
      answered,
      author: question ? users[question['author']].name : '',
      avatar: question ? users[question['author']].avatarURL: '',
      answer1: question ? question['optionOne'].text: '',
      answer2: question ? question['optionTwo'].text: '',
      userAnswer,
      vote1:question ? question['optionOne']['votes'].length: 0,
      vote2:question ? question['optionTwo']['votes'].length: 0
    }
  }

export default connect(mapStateToProps)(QuestionById);
