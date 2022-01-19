import { combineReducers } from 'redux';
import { authReducers, spaceReducers } from './reducers';

const rootReducer = combineReducers({
    data: authReducers,
    space: spaceReducers,
});

export default rootReducer;