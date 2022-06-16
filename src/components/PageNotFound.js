import React, {Component} from 'react'
import 'react-bootstrap/dist/react-bootstrap.min.js';
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'

class PageNotFound extends Component { 

  render() {
    const {authUser} = this.props;

    if (authUser!== null)
      return (
        <div>
        <h3>404 Sorry This Page cannot be found !!!</h3>
        <Link to={'/questions'}>Questions</Link>
        </div>
      )
    if (authUser===null)
      return (
        <div>
        <h3>404 This Page Does Not exist, please Log in!!!</h3>
        <Link to={'/login'}>Login</Link>
        </div>
      )  
  }
}

const mapStateToProps = ({authUser}) => ({
  authUser  
});

export default connect(mapStateToProps)(PageNotFound);
