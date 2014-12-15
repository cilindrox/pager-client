import Ember from 'ember';
import raw from 'ic-ajax';

import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var session = this.container.lookup('simple-auth-session:main');
    var token = session.content.token;
    // TODO(gfestari): trigger only if user is logged
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
