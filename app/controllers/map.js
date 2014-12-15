/* global google */
import Ember from 'ember';

export default Ember.Controller.extend({
  getMarkers: function() {
    // use cached data
    var model = this.store.all('visit');

    var markers = [];
    model.forEach(function(item) {
      markers.push(new google.maps.LatLng(
        item.get('latitude'),
        item.get('longitude')
      ));
    });
    return markers;
  }
});
