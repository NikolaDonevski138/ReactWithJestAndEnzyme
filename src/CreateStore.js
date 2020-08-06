import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import RootReducer from './reducers/index'



export const store = createStore(RootReducer, applyMiddleware(ReduxThunk))