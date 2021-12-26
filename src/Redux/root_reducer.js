import { combineReducers } from 'redux';
import { authReducers } from './reducers';

const rootReducer = combineReducers({
    data: authReducers,
});

export default rootReducer;