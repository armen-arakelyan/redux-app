import {combineReducers} from 'redux';
import changeName from './calculator/reducer';

const rootReducer=combineReducers({
    tiv:changeName
})

export default rootReducer