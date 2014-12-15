import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('map', { path: '/' });
  this.route('login');
  this.route('fourOhFour', { path: '*path'});
});

export default Router;
