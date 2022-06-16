import React, {Component} from 'react'
import {setAuthUser} from '../actions/authUser';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class LogOut extends Component {

  componentDidMount(){
    this.props.dispatch(setAuthUser(null));
  }
  
  render() {
    return (
      <Redirect to={'/'} />
      )
  }
}
const mapStateToProps = ({users, authUser}) => ({
  users,
  authUser
});

export default connect(mapStateToProps)(LogOut);