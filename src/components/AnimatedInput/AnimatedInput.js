import React, { Component } from 'react';
import classNames from 'classnames';
import './_animated-input.scss';

class AnimatedInput extends Component {

	constructor(){
		super();
		this.state = {
			isValue: false,
			isFocus: false,
		}
	}

	render() {
		let {isValue, isFocus} = this.state;
		let {type, placeholder} = this.props;

		return (
				<div className={classNames("app-input-animated", {
					"app-input-animated__active": isValue || isFocus
				})}>
					<input
							onInput={this.onInput}
							onFocus={this.onFocus}
							onBlur={this.onBlur}
							className="app-input" type={type} />
					<span className="app-input-animated__span">{placeholder}</span>
				</div>
		);
	}

	onBlur = (e) => {
		let {target} = e;
		this.setState((prevState, props) => {
			return {
				...prevState,
				isFocus: false
			}
		});
	};

	onFocus = (e) => {
		let {target} = e;
		this.setState((prevState, props) => {
			return {
				...prevState,
				isFocus: true
			}
		});
	};

	onInput = (e) => {
		let {target} = e;
		let {onChangeEvent, state} = this.props;

		onChangeEvent(e, state);

		this.setState((prevState, props) => {
			return {
				...prevState,
				isValue: !!target.value,
			}
		});
	};
}

export default AnimatedInput;
