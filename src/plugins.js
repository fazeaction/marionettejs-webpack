import Backbone from 'backbone';
import $ from 'jquery';
Backbone.$ = $;
import Marionette from 'backbone.marionette';
import 'backbone.syphon';
import 'backbone-query-parameters';
import 'babel-polyfill';

import './main.scss';

// start the marionette inspector
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}