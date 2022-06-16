import React, {Component} from 'react'
import { connect } from "react-redux"
import Leader from './Leader';



class LeaderBoard extends Component {
  
  render() {
    const {leaders} = this.props

    return (
      <div className="leaderboard">
      <h3>LeaderBoard</h3>
      <br />
        <ul>
          {leaders.map((leader) => (
            <li key={leader.id}>
              <Leader user = {leader} />
            </li>
            ))}
        </ul>
       </div>
      )
  }
}

function mapStateToProps({ users }){
    var leaders = Object.keys(users)
    //var addPoints = []
    //var tempUsers= leaders
    .map((id)=>users[id])
      //{
      //addPoints = users[id];
      //addPoints['points'] = Object.keys(addPoints['answers']).length +
      //addPoints['questions'].length;
    //})
    .sort((entryA, entryB) => (entryB.questions.length + Object.keys(entryB.answers).length) 
      - (entryA.questions.length + Object.keys(entryA.answers).length));  

    return{
      leaders
    }
  }

export default connect(mapStateToProps)(LeaderBoard);