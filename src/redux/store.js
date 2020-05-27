import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducers
import questionnaireReducer from './reducers/questionnaireReducer';

// Middleware
const middleware = [thunk];
const enhancer = applyMiddleware(...middleware);

const rootReducer = combineReducers({
  questionnaire: questionnaireReducer,
});

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
