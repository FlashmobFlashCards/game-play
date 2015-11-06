import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import Router from './router';

let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

let element = document.querySelector('.app');

new Router(element).start();
ReactDom.render(
  <div>
    <Clock format="#hhmmss"/>
  </div>,
document.querySelector('.app')

);
