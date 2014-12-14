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
    var visitData = [
      new google.maps.LatLng(37.782551, -122.445368),
      new google.maps.LatLng(37.782745, -122.444586),
      new google.maps.LatLng(37.782842, -122.443688),
      new google.maps.LatLng(37.782919, -122.442815),
      new google.maps.LatLng(37.782992, -122.442112),
      new google.maps.LatLng(37.783100, -122.441461),
      new google.maps.LatLng(37.783206, -122.440829),
      new google.maps.LatLng(37.783273, -122.440324),
      new google.maps.LatLng(37.783316, -122.440023),
      new google.maps.LatLng(37.783357, -122.439794),
      new google.maps.LatLng(37.783371, -122.439687),
      new google.maps.LatLng(37.783368, -122.439666),
      new google.maps.LatLng(37.783383, -122.439594),
      new google.maps.LatLng(37.783508, -122.439525),
      new google.maps.LatLng(37.783842, -122.439591),
      new google.maps.LatLng(37.784147, -122.439668),
      new google.maps.LatLng(37.784206, -122.439686),
      new google.maps.LatLng(37.784386, -122.439790),
      new google.maps.LatLng(37.784701, -122.439902)
    ];

    pointarray = new google.maps.MVCArray(visitData);
    heatmap = new google.maps.visualization.HeatmapLayer({
      data: pointarray
    });

    heatmap.setMap(that.get("map"));

    // testacular:
    (function() {
      return Ember.$().get('http://api.jquery.com/jquery.get/', function(result) {
        console.log('CALLED');
      });
    })();


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