import React from'react';
import ReactDOM from 'react-dom';
import Main from './main';
import {Provider} from 'react-redux';
import  store from './store/index'
const App=(
    <Provider store={store}>
        <Main/>
    </Provider>
);


ReactDOM.render(App, document.getElementById('root'));

