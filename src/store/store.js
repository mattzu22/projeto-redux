import { createStore, combineReducers } from 'redux'
import cartReducer from './reduces/cart'

// nosso reducers raiz vai receber uma conbinação de novos reducers
const rootReducers = combineReducers({
    cartProducts: cartReducer
})

// os reduces vão criar uma conexão entre o estado que vai ser alterado com o store qua vai ter o estado global 
const store = createStore(rootReducers)

export default store