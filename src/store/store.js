import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './reducers/authSlice';
import userReducer from './reducers/userSlice';
import { authMiddleware } from './middleware/authMiddleware';


const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer,
});

const store = createStore(
   rootReducer,
   applyMiddleware(thunk, authMiddleware)
);

export default store;