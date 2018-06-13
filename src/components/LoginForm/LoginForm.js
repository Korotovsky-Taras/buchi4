import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AnimatedInput from '../AnimatedInput/AnimatedInput';
import './_login-form.scss';
import { registerUserAction } from '../../actions';

class LoginForm extends Component {
	constructor(){
		super();
		this.state = {
			user: {
				name: '',
				email: '',
				password: ''
			},
			errors: []
		}
	}

	render() {
		let { errors } = this.state;

		return (
			<form className="login-form" onSubmit={this.onSubmit}>
				<div className="login-form__inner">
					<div className="login-form__item">
						<AnimatedInput type="text" state="name" placeholder="Имя" onChangeEvent={this.onChangeForm} />
						{!!errors.name && <span className="login-form__error-label">{errors.name}</span>}
					</div>
					<div className="login-form__item">
						<AnimatedInput type="text" state="email" placeholder="Почта" onChangeEvent={this.onChangeForm} />
						{!!errors.email && <span className="login-form__error-label">{errors.email}</span>}
					</div>
					<div className="login-form__item">
						<AnimatedInput type="password" state="password" placeholder="Пароль" onChangeEvent={this.onChangeForm} />
						{!!errors.password && <span className="login-form__error-label">{errors.password}</span>}
					</div>
					<div className="login-form__item -text-right">
						<button className="login-submit-button">Login</button>
					</div>
				</div>
			</form>
		);
	}

	validate(name, email, password) {
		let errors = {};

		console.log(name, name.length === 0)

		if (name.length === 0) {
			errors["name"] = "Имя не может быть пустым";
		}

		if (!email.match(/^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/)) {
			errors["email"] = "Почтовый аддрес введен не верно";
		}

		if (!password.match(/[a-zA-Z0-9]{6,}/)) {
			errors["password"] = "Пароль должен быть не меньше 6 символов";
		}
		if (!password.match(/(?=.*[A-Z])/)) {
			errors["password"] = "Пароль должен состояить из большой буквы";
		}
		if (!password.match(/(?=.*[a-z])/)) {
			errors["password"] = "Пароль должен состояить из маленькой буквы";
		}
		if (!password.match(/(?=.*\d)/)) {
			errors["password"] = "Пароль должен состояить из цифры";
		}

		return errors;
	}

	onSubmit = evt => {
		evt.preventDefault();

		const { name, email, password } = this.state.user;
		const errors = this.validate(name, email, password);

		this.setState({ errors: this.validate(name, email, password) });

		if (Object.keys(errors).length === 0) {
			this.props.onRegisterUser(this.state.user);
		}

	};

	onChangeForm = ({target}, type) => {

		let {user} = this.state;

		if(user.hasOwnProperty(type)) {
			this.setState((prevState, props) => ({
				user: {
					...prevState.user,
					[type]: target.value
				}
			}))
		}
	};

}

function mapStateToProps (state) {
	return {
		user: state.user
	}
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators({
		onRegisterUser: registerUserAction
	}, dispatch)
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(LoginForm));
