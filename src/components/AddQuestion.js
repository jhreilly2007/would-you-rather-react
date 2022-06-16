import React, {Component} from 'react'
import { handleAddQuestion } from '../actions/questions';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class AddQuestion extends Component {
  state = {
    answer1: "",
    answer2: "",
    success: false
  };

  handleChange = selection => (event) =>{
    this.setState({[selection]:event.target.value})
  };

  handleAddQuestion = (event) => {
    event.preventDefault();

    const {answer1, answer2} = this.state;
    const {authUser} = this.props;

    this.props.dispatch(handleAddQuestion(answer1, answer2, authUser));
    this.setState({ success: true });
    this.setState(() => ({answer1:"", answer2:""}))
  };
  
  render() {
    const {answer1, answer2, success} = this.state;
    const {users, authUser} = this.props;

    if(success){
      return (<Redirect to ={'/questions'}/>)
    }

    return (

      <div className="add-question">
      <h2>{users[authUser].name} wants to know...</h2>
      <h3>Would you rather...</h3><br />
      <h4>Enter Options</h4>
      <textarea value={answer1} placeholder="Option 1" name="answer1" onChange={this.handleChange('answer1')}/>
      <textarea value={answer2} placeholder="Option 2" name="answer2" onChange={this.handleChange('answer2')}/>
      <br /><br />
       <button onClick={this.handleAddQuestion} disabled={answer1 === '' || answer2 === ''}>
            Add Question!
      </button>    
      </div>
      )

  }
}


const mapStateToProps = ({users, authUser}) => ({
  users,
  authUser
});

export default connect(mapStateToProps)(AddQuestion);