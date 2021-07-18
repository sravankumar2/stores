import { combineReducers, createStore } from 'redux'
import medicineReducer from './medicine/reducer'
import ordersReducer from './order/reducer'
import executiveReducer from './salesExecutive/reducer'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
  medicines: medicineReducer,
  executives: executiveReducer,
  user: userReducer,
  orders: ordersReducer,
})
const configureStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
export default configureStore
