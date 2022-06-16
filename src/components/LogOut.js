import React, {Component} from 'react'
import {setAuthUser} from '../actions/authUser';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class LogOut extends Component {

  logOut = () => {
    this.props.dispatch(setAuthUser(null));
    return <Redirect to ={'/login'}/>  
  }
  
  render() {
    return (
      <div className="logout">
      <button className='Button' onClick = {this.logOut}>Logout</button>
       </div>
      )
  }
}
const mapStateToProps = ({users, authUser}) => ({
  users,
  authUser
});

export default connect(mapStateToProps)(LogOut);