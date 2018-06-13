import React, {Fragment} from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import './_login.scss'

const Login = () => {
	return (
		<div className="app-login-page">
			<LoginForm />
		</div>
	);
};

export default Login;
