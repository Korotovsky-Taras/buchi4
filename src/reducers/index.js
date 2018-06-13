import { combineReducers } from 'redux';
import * as Actions from '../actions/variable.js'

export default combineReducers({
    user: function(state = null, {type, payload}) {
		switch(type) {
			case Actions.REGISTER_USER:
				return payload;
				break;
			default:
				return state;
		}
    }
});