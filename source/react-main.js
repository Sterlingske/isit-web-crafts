import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from './ReactHome.js';
import MakeHtml from './MakeHtml.js';

let homeDiv = null;

function reactMakeHtml(event, customMessage) {
    ReactDOM.render(<MakeHtml/>, homeDiv);
}

function reactHome() {
  $('#pageLoad').empty();
  home();
}

function home() {
    ReactDOM.render(<ReactHome/>, homeDiv);
}

$(document).ready(function() {
    homeDiv = document.getElementById('home');
    home();
    $.subscribe('reactMakeHtml', reactMakeHtml);
    $.subscribe('home', reactHome);
});
