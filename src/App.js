import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
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
    <h3>404 Sorry This Page cannot be found!!!</h3>
  </div>
);

class App extends Component{
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}		

	render(){
		const {authUser} = this.props;	

		{
			if(authUser===null) 
				return(
					<Router>
						<Switch>
							<Route path="/"component={Login}/>
						</Switch>
						</Router>
				)
		}	
		return(
			<Router>
				<Fragment>
					{ authUser!== null &&
					(
						<>
						<div>
						<Header/><br/>			
						<Navigation/><br/>
						</div>
						</>
					)}
						<Switch>
							<Route path='/' exact component={Login}/>
							<Route path='/login' exact component={Login}/>
							<Route path='/logout' exact component={LogOut}/>
							<Route path='/questions' exact component={Home}/>
							<Route path='/leaderboard' exact component={LeaderBoard}/>
							<Route path='/questions/:id' exact component={QuestionById} />
							<Route path='/add' exact component={AddQuestion}/>
							<Route path='/error' exact component={ErrorPath}/>
							<Redirect to="/error"/>
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
