import {combineReducers} from 'redux';
import AuthReducer from '../Redux/Modules/Auth/AuthRedux';
import HomeReducer from '../Redux/Modules/Home/HomeRedux';
import CounterReducer from '../Redux/Modules/Counter/CounterRedux';

const RootReducer = combineReducers({
    AuthReducer,
    CounterReducer,
    HomeReducer,
});

export default RootReducer;
