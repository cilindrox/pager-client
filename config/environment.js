/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pager-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:token'
  };

  ENV['simple-auth-token'] = {
    serverTokenEndpoint: '/endpoint',
    identificationField: 'username',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' https://maps.googleapis.com https://maps.gstatic.com",
    'font-src': "'self' https://fonts.gstatic.com",
    'connect-src': "'self' https://api.mixpanel.com", // Allow data (ajax/websocket) from api.mixpanel.com
    'img-src': "'self' https://maps.googleapis.com https://csi.gstatic.com https://maps.gstatic.com https://khms0.googleapis.com https://khms1.googleapis.com",
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com https://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
    'media-src': "'self'"
  };

  return ENV;
};
