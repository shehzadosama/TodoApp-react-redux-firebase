import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
// import rootReducer from './reducers';

import addItems from './reducers/addItems';
import removeItems from './reducers/removeItems';
import getTodos from './reducers/getTodos';
const middleware = applyMiddleware(thunk);



// let store = createStore(
//     rootReducer,
//     middleware
// )


export const rootReducer = combineReducers({
  addItems,
   removeItems ,getTodos
// more reducers go here
})
//Update in counter 9 -- passing root reducer
//Update in counter 13 -- pass middleware in createStore
let store = createStore(
 rootReducer ,
  middleware
)
store.subscribe(() =>
    console.log(store.getState())
);

export default store;
