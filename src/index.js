import React from 'react';
import ReactDOM from 'react-dom';
import {Provider  } from 'react-redux';
import { createStore  } from 'redux';

import  App from './App';
import Reducers from './reducer';


const store = createStore(Reducers);

const GetIndex = () =>{
    return (
        <div>
            <Provider store={store}>
            <App/>
            </Provider>
        </div>
    );
};

ReactDOM.render(
    <GetIndex/>,
    document.querySelector('#root')
);


