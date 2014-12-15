import Ember from 'ember';

export default Ember.Controller.extend({
  lat:      '37.774546',
  lng:      '-122.433523',
  zoom:     13,
  type:     'satellite',

  markers: [],

  actions: {
    addMarker: function () {
      this.get('markers').addObject({title: 'new', lat: 0, lng: 0, isDraggable: true});
    },

    removeMarker: function (marker) {
      this.get('markers').removeObject(marker);
    }
  }
});
