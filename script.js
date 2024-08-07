// script.js
let map;
let service;
let infowindow;

function initMap() {
  const userLocation = new google.maps.LatLng(-33.867, 151.195);
  map = new google.maps.Map(document.getElementById('map'), {
    center: userLocation,
    zoom: 15
  });

  const request = {
    location: userLocation,
    radius: '500',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  const placeLoc = place.geometry.location;
  const marker = new google.maps.Marker({
    map: map,
    position: placeLoc
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function showMap() {
  document.getElementById('map').style.display = 'block';
  initMap();
}
