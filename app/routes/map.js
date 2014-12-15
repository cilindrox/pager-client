import Ember from 'ember';
import raw from 'ic-ajax';

import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var session = this.container.lookup('simple-auth-session:main');
    if (!session) { return; }
    var token = session.content.token;
    return raw({
      type: 'GET',
      url: 'your endpoint url',
      beforeSend: function (request) {
          request.setRequestHeader('Authorization', 'Bearer ' + token);
      },
      processData: false
    }).then(function(data) {
      return {
        visitsCount: data
      };
    });
  }
});
