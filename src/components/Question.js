import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import {Redirect} from 'react-router-dom'
import Navigation from './NavigationBar';

class Question extends Component {
  
  render() {
    const {authorName, answer1, answer2, avatar} = this.props

    return(
      <div>
        <img src={'/images/'+avatar} alt ='pic'/>
        <h2>{authorName} Wants to know...</h2>
        <h3> Would you Rather...</h3>
        <h4>{answer1} <strong>OR...</strong> </h4><br />
        <h4>...{answer2}!</h4>
        <Link className='link' to ={`/questions/${this.props.id}`}>View Question</Link>
        <br /><br /><br />
      </div>
      )
  }
}

function mapStateToProps({ users, questions, authUser}, {id}){
    var question = questions[id]
    const user = users[authUser]
    const authorName = question ? users[question['author']].name : ''
    const answer1 = question ? question['optionOne']['text']:''
    const answer2 = question ? question['optionTwo']['text']:''
    //const date = question['timestamp']
    const avatar = question ? users[question['author']].avatarURL: ''

    return{
      authorName, 
      answer1,
      answer2,
      question,
      user, 
      avatar
    }
  }

export default connect(mapStateToProps)(Question);