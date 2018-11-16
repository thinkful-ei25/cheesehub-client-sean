import { createStore, applyMiddleware} from 'redux'; 
import cheeseReducer from './reducers'; 
import thunk from 'redux-thunk'; 

const store = createStore(cheeseReducer, applyMiddleware(thunk)); 

export default store; 