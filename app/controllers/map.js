import Ember from 'ember';

export default Ember.Controller.extend({
  lat:      '37.774546',
  lng:      '-122.433523',
  zoom:     13,
  type:     'satellite',

  markers: [
    {title: 'one', lat: 5, lng: 5, description: 'hello 1', isDraggable: true},
    {title: 'two', lat: 5, lng: 0, hasInfoWindow: false},
    {
      title:                  'three',
      lat:                    0,
      lng:                    5,
      infoWindowTemplateName: 'marker-info-window',
      helloWorld:             'Hello World!'
    }
  ],

  actions: {
    addMarker: function () {
      this.get('markers').addObject({title: 'new', lat: 0, lng: 0, isDraggable: true});
    },

    removeMarker: function (marker) {
      this.get('markers').removeObject(marker);
    }
  }
});
