import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Navigation extends Component {
  
  render() {
    return (
      <ul className = "Nav">
        <li><NavLink to = '/questions'> Questions </NavLink></li>
        <li><NavLink to = '/leaderboard'> Leader Board </NavLink></li>
        <li><NavLink to = '/add'> Add New Question </NavLink></li>
        <li><NavLink to = '/logout'> Log Out </NavLink></li>
      </ul>
      )
  }
}
export default Navigation