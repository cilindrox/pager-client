/* global google */

import Ember from 'ember';

export default Ember.View.extend({
  id: 'map_canvas',
  tagName: 'div',
  attributeBindings: ['style'],
  style: "width:100%; height:300px",
  map: null,
  markers: [],

  didInsertElement: function() {
    var mapOptions = {
      center: new google.maps.LatLng(37.871667, -122.272778),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    // The controller handles the marker management.
    // The view handles placing the marker on the maps.
    var map = new google.maps.Map(this.$().get(0), mapOptions);
    this.set("map", map);

    var controller = this.get('controller');
    var markers = controller.getMarkers();
    var pointarray = new google.maps.MVCArray(markers);
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: pointarray
    });

    var that = this;
    heatmap.setMap(that.get('map'));
  }
});
