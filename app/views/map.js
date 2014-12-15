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

    var pointarray, heatmap;

    var controller = this.get("controller");
    var map = new google.maps.Map(this.$().get(0), mapOptions);

    this.set("map", map);

    var that = this;

    var visitData = [];
    var markers = controller.markers;
    markers.forEach(function(marker) {
      visitData.push(new google.maps.LatLng(marker.lat, marker.lng));
    });

    pointarray = new google.maps.MVCArray(visitData);
    heatmap = new google.maps.visualization.HeatmapLayer({
      data: pointarray
    });

    heatmap.setMap(that.get("map"));

    // When clicking on the map, we create our own markerObject and pass it to our controller.
    // The controller handles the marker management.
    // The view handles placing the marker on the map.
    /*

    google.maps.event.addListener(map, 'click', function(event){

      // at first I had this code here... but the MarkerController takes care of it now.
      // when adding a new marker, all markers are reset to a red icon.
      // $.each(that.get("markers"), function (i, m) {
      //   m.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
      // });

      // the newly added marker gets a green color (selected marker)
      var marker = new google.maps.Marker({
        position: event.latLng,
        //icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        //animation: google.maps.Animation.DROP
      });

      // create a new marker object containing the lat,lng and the googleMarker
      var markerObject = App.Marker.create({
                            lat: event.latLng.lat(),
                            lng: event.latLng.lng(),
                            googleMarker: marker
      });

      //markerObject.set("selected",true);

      // store the google marker object on this view.
      that.get("markers").pushObject(marker);

      // Instruct the controller that the marker was added.
      controller.addMarker(markerObject);

      google.maps.event.addListener(marker, 'click', function() {
        controller.markerClick(markerObject);
      });

      marker.setMap(that.get("map"));

    });
    */
  }
});
