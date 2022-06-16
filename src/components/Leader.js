import React, {Component} from 'react'
import {connect} from 'react-redux'

class Leader extends Component {
  
  render() {
    const {userName, avatar, totalQuestionsAsked, totalQuestionsAnswered,
    	userPoints} = this.props
    
    return(
      <div>
        <img alt='pic' src={'/images/'+avatar}/>
        <h3>{userName}</h3>
        <br />
        <h4>Asked Questions : {totalQuestionsAsked}</h4>
        <h4>Answered Questions : {totalQuestionsAnswered}</h4>
        <br />
        <h3>Total Score: {userPoints}</h3>
        <br /><br />
      </div>
      )
  }
}

function mapStateToProps({ authUser}, {user}){
    const userName = user.name
    const avatar = user.avatarURL
    const totalQuestionsAsked = user.questions.length
    const totalQuestionsAnswered = Object.keys(user.answers).length
    const userPoints = totalQuestionsAnswered + totalQuestionsAsked

    return{
      userName, 
      avatar,
      totalQuestionsAsked,
      totalQuestionsAnswered,
      userPoints
    }
  }

export default connect(mapStateToProps)(Leader);