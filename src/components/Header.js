import React, {Component} from 'react' 
import {connect} from 'react-redux'

class Header extends Component {

  render() {
    const {users, authUser} = this.props;

    return (
      <div className="App">
      <h2>Hey {users[authUser].name} welcome! </h2>
       </div>
      )
  }
}

const mapStateToProps = ({users, authUser}) => ({
  users,
  authUser
});

export default connect(mapStateToProps)(Header);