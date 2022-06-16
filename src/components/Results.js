import React, { Component } from "react"
import { connect } from "react-redux"

class Results extends Component {
  render() {
    const { authUser, question } = this.props;

    const { answer1, answer2 } = question;
    console.log("Print Me");
    console.log(answer1);
    const totalVotes = answer1.votes.length + answer2.votes.length;
    const selected = answer1.votes.includes(authUser);

    return (
      <div>
      {((answer1.votes.length / totalVotes) * 100).toFixed(0)}%

      <br/>
       {answer1.votes.length} out of {totalVotes} votes
      <br />
      <h4>{answer1.text}</h4>
      <br />
        {((answer2.votes.length / totalVotes) * 100).toFixed(0)}%
      <br />
         {answer2.votes.length} out of {totalVotes} votes
      
       <br />
          <h4>{answer2.text}</h4>
          </div >
    );
  }
}


const mapStateToProps = ({users, userAuth}) => ({
  users,
  userIds: Object.keys(users),
  userAuth
});

export default connect(mapStateToProps)(Results);