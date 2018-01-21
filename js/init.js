$(document).ready(function() {	
	$('#photo-gallery ul').innerfade({
		animationtype: 'fade',
		speed: 1000,
		timeout: 7000,
		containerheight: '600px'
	});
});

function initMap() {
    var customMapType = new google.maps.StyledMapType([
        {
          stylers: [
            {saturation: '-100'},
            {visibility: 'simplified'},
            {weight: 0.5}
          ]
        },
        {
          elementType: 'labels',
          stylers: [{visibility: 'on'}]
        }
      ], {
        name: 'Custom Style'
    });
    var customMapTypeId = 'custom_style';

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: 43, lng: -85.6748615},
      scrollwheel:  false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
      }
    });
    
    var heartIcon = {
        path: 'M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z',
        fillColor: '#43ABBF',
        fillOpacity: 0.8,
        scale: .015,
        strokeColor: '#0488A1',
        strokeWeight: 1
      };
    
    var cutleryIcon = {
        path: 'M832 64v640q0 61-35.5 111t-92.5 70v779q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-779q-57-20-92.5-70t-35.5-111v-640q0-26 19-45t45-19 45 19 19 45v416q0 26 19 45t45 19 45-19 19-45v-416q0-26 19-45t45-19 45 19 19 45v416q0 26 19 45t45 19 45-19 19-45v-416q0-26 19-45t45-19 45 19 19 45zm768 0v1600q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-512h-224q-13 0-22.5-9.5t-9.5-22.5v-800q0-132 94-226t226-94h256q26 0 45 19t19 45z',
        fillColor: '#43ABBF',
        fillOpacity: 0.8,
        scale: .015,
        strokeColor: '#0488A1',
        strokeWeight: 1
      };
    
     var hotelContentString = '<div id="content">'+
       '<div id="siteNotice">'+
       '</div>'+
       '<h4>Homewood Suites by Hilton Grand Rapids Downtown</h4>'+
       '<div id="bodyContent">'+
       '<p>Accomadations at 161 Ottawa Ave NW, Grand Rapids, MI.</p>'+
       '<a target="_blank" href="https://goo.gl/maps/8Zj7Dv3SBjr">'+
       'Directions</a> '+
       '</div>'+
       '</div>';

       var hotelInfoWindow = new google.maps.InfoWindow({
         content: hotelContentString
       });
       var hotelPosition = {lat: 42.9668167, lng: -85.6728015};

       var hotelMarker = new google.maps.Marker({
         position: hotelPosition,
         map: map,
         title: 'Hilton - Homewood Suites'
       });
       hotelMarker.addListener('click', function() {
         hotelInfoWindow.open(map, hotelMarker);
       });
    
    var hotel2ContentString = '<div id="content">'+
       '<div id="siteNotice">'+
       '</div>'+
       '<h4>Comfort Suites Grand Rapids North</h4>'+
       '<div id="bodyContent">'+
       '<p>Accomadations at 350 Dodge Street, Comstock Park, MI.</p>'+
       '<a target="_blank" href="https://goo.gl/maps/aH6Pi981nD92">'+
       'Directions</a> '+
       '</div>'+
       '</div>';

       var hotel2InfoWindow = new google.maps.InfoWindow({
         content: hotel2ContentString
       });
       var hotel2Position = {lat: 43.04622, lng: -85.66075};

       var hotel2Marker = new google.maps.Marker({
         position: hotel2Position,
         map: map,
         title: 'Comfort Suites - GR North'
       });
       hotel2Marker.addListener('click', function() {
         hotel2InfoWindow.open(map, hotel2Marker);
       });
    
    var barContentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4>The Cheney Place</h4>'+
      '<div id="bodyContent">'+
      '<p>Ceremony and Reception will happen at the Cheney Place which is located at 1600 Monroe Ave NW, Grand Rapids, MI.</p>'+
      '<a target="_blank" href="https://goo.gl/maps/T16Eqi9ZPx62">'+
      'Directions</a> '+
      '</div>'+
      '</div>';

      var barInfoWindow = new google.maps.InfoWindow({
        content: barContentString
      });
      var barPosition = {lat: 42.9923594, lng: -85.6701837};

      var barMarker = new google.maps.Marker({
        position: barPosition,
        map: map,
        title: 'The Cheney Place'
      });
      barMarker.addListener('click', function() {
        barInfoWindow.open(map, barMarker);
      });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
}
