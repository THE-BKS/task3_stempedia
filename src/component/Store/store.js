import { createStore } from 'redux'
import rootReducer from '../reducres/index'

export const store = createStore(rootReducer);