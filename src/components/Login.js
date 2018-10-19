import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
	<div>
		<h2>Inventory Login</h2>	
		<p>Sign in to manage your store inventory</p>
		<button className="github" onClick={ () => props.authenticate('Github')}>
			Log in with Github
		</button>
		<button className="facebook" onClick={ () => props.authenticate('Facebook')}>
			Log in with Facebook
		</button> 
	</div>
);

Login.propTypes = {
	authenticate: PropTypes.func.isRequired
};

export default Login;