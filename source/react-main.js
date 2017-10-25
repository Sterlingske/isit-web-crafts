import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from './ReactHome.js';

$(document).ready(function() {
    //const home = document.getElementById('home');
    ReactDOM.render(<ReactHome/>, document.getElementById('home'));
});
