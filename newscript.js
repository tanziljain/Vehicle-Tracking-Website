// Initialize Google Map
let map;
let directionsService;
let directionsRenderer;

function initMap() {
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  const mapContainer = document.getElementById("map-container");
  const mapOptions = {
    center: new google.maps.LatLng(37.7749, -122.4194),
    zoom: 13,
    mapTypeId: "roadmap",
  };
  map = new google.maps.Map(mapContainer, mapOptions);
  directionsRenderer.setMap(map);
}

// Show Map function
function showMap() {
  const usernameInput = document.querySelector(".username input[type='text']");
  const passwordInput = document.querySelector("input[type='password']");
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validate username and password
  if (username === "admin" && password === "password") {
    document.getElementById("map-container").style.display = "block";
    initMap();
  } else {
    alert("Invalid username or password");
  }
}

// Google Translate function
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}
