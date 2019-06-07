

import { createStore , combineReducer , applyMiddleware} from 'redux';

const initialStateProducts = ({
    cart : []
});
const   Adduser = (state = initialStateProducts,action) => {
    switch(action.type) {
        case 'name':
            const getPyload =action.name;
            return { ...state , getPyload };
        default :
            return state;
    }
}

const store = createStore(Adduser);

store.subscribe(
    ()=> {console.log(`State Change `, store.getState())}
)

const setUser= (name) =>
    ({
        type: 'name',
        name

    })


store.dispatch(setUser('mayank'));
store.dispatch(setUser('india'));
