import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAssocAnswerWithUser} from '../actions/users';

class QuestionById extends Component {

  handleAnswer = answer =>(event) =>{
  const id = this.props.passedId
  const authUser = this.props.user.id

  this.props.dispatch(handleAssocAnswerWithUser(authUser, id, answer));
}
  
  render() {
    const {answered, author, authUser, userAnswer,
      answer1, answer2, vote1, vote2, avatar, passedId} = this.props;

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
            <button class="Button" onClick={this.handleAnswer('optionOne')}>
              {answer1}
            </button>
            <button class="Button" onClick={this.handleAnswer('optionTwo')}>
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
    const answered = Object.keys(users[authUser]['answers']).includes(passedId)
    const userAnswer =  answered ? users[authUser]['answers'][passedId] : '';
   
    return{
      user,
      passedId, 
      authUser,
      //question,
      answered,
      author: users[question['author']].name,
      avatar: users[question['author']].avatarURL,
      answer1: question['optionOne'].text,
      answer2: question['optionTwo'].text,
      userAnswer,
      vote1:question['optionOne']['votes'].length,
      vote2:question['optionTwo']['votes'].length
    }
  }

export default connect(mapStateToProps)(QuestionById);
