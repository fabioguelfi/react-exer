import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const reducers = combineReducers({
    field: () => {
        console.log(`field call`)
        return { value: 'React is good' }
    }
});

import Field from './field';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue="teste" />
    </Provider>
    , document.getElementById('app'));