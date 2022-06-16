import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from "react-redux";

const PrivateRoute =
({ component: Component, authUser, ...rest }) => (
		<Route 
			{...rest} 
			render = 
			{props =>
				authUser === null ? 		
				( 
					<Redirect to = {{
						pathname: '/login',
						state: { from: props.location}}}/>
				):
				( 
					<Component {...props} />
				)
			}
		/>
	);


function mapStateToProps({ authUser }){
	return{
  		authUser
  	}
};

export default connect(mapStateToProps)(PrivateRoute);