export default class LocalData {
	static fields = {
		'VERIFIED_USER': 'VERIFIED_USER'
	};
	static setItem(key, value){
		localStorage.setItem(key, value)
	}
	static getItem(key){
		return localStorage.getItem(key)
	}
};