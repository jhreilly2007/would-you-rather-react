import React, {Component} from 'react'
import 'react-bootstrap/dist/react-bootstrap.min.js';
import {setAuthUser} from '../actions/authUser';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Login extends Component { 

redirect = null; 

componentDidMount(){
  const {history, location:{pathname}} = this.props;
  this.redirect = pathname;
  //history.push("/questions")
}

handleAuthUserChange = (id) => {
  const {history} = this.props;

  this.props.dispatch(setAuthUser(id))
  console.log(this.redirect)
  if(this.redirect === "/logout" || this.redirect ==="/login"){
    history.push('/')
  }else{
    history.push(this.redirect)
  }
  

  };

  render() {
    const {userIds, users, authUser} = this.props;

    if (authUser !== null) {
      return (
        <Redirect to={'/questions'} />
        )
    }


    return (
      <div className="App">
        <h3>Welcome to 'Would you Rather'</h3>
        <br/>
        <h4>Select User</h4> 

        {userIds.map(user =>(
          <button key = {user} onClick={()=>this.handleAuthUserChange(user)}>
              {users[user].name}
          </button>
          ))}       
      </div>
      );
  }
}

const mapStateToProps = ({users, authUser}) => ({
  users,
  userIds: Object.keys(users),
  authUser  
});

export default connect(mapStateToProps)(Login);