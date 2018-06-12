import { combineReducers } from 'redux'; 

export default combineReducers({
    helloworld: function(initState = 'helloworld') {
        return initState
    }
});