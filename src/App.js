import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { handleInitialData } from './actions/shared';
import { connect } from "react-redux";
import PrivateRoute from './components/PrivateRoute';
import LeaderBoard from './components/LeaderBoard';
import Login from './components/Login';
import LogOut from './components/LogOut';
import QuestionById from './components/QuestionById';
import AddQuestion from './components/AddQuestion';
import Navigation from './components/NavigationBar';
import Header from './components/Header';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

const ErrorPath = () => (
  <div>
    <h3>404 Sorry This Page cannot be found!!! Please log in : </h3>
    	<Link to={'/'}>Login</Link>
  </div>
);

class App extends Component{
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}		

	render(){
		const {authUser} = this.props;		
		return(
			<Router>
				<Fragment>
					{ authUser!== null &&
					(
						<>
						<div>
						<Header/><br/>
						<LogOut /><br/><br/>			
						<Navigation/><br/>
						</div>
						</>
					)}
						<Switch>
							<Route exact path='/' component={Login}/>
							<Route exact path='/login' component={Login}/>
							<Route exact path='/PageNotFound' component={PageNotFound}/>
							<PrivateRoute exact path='/questions' component={Home}/>
							<PrivateRoute exact path='/leaderboard' component={LeaderBoard}/>
							<PrivateRoute path='/question/:id' component={QuestionById} />
							<PrivateRoute exact path='/add' component={AddQuestion}/>
							<Route component={PageNotFound}/>				
						</Switch>
				</Fragment>
			</Router>
		);
	}
}

function mapStateToProps({ authUser }){
	return{
  		authUser
  	}
};

export default connect(mapStateToProps)(App);
