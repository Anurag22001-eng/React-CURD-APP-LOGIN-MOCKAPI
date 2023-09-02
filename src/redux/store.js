import {createstore,combineReducers, createStore} from 'redux'
import userReducer from './reducer/userReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    user:userReducer
})

const commonData = {
    user:{
        items:[
            {
                id:1,
                name:'Anurag',
                email:'anuragbej@gmail.com',
                phone:'909090909'

            }
        ]
    }
}


const store = createStore(rootReducer,commonData,composeWithDevTools())

export default store;