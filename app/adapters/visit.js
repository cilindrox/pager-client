import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // TODO(gfestari): load from ENV
  host: 'http://localhost:3000',
  headers: function() {
    // Retrieve token from session, compute it on each request.
    var session = this.container.lookup('simple-auth-session:main');
    var token = session.content.token;

    return {
      'Authorization': 'Bearer ' + token
    };
  }.property().volatile()
});
