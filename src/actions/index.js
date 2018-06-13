import * as Actions from './variable.js'

/**
 * Событие регитрации Юзера
 * @param user
 * @returns {{type: string, payload: *}}
 */
export const registerUserAction = user =>  {
	return {
		type: Actions.REGISTER_USER,
		payload: user
	}
};