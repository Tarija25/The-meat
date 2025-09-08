// 🌍 Preserve your map setup
function initMap() {
  const location = { lat: 34.0522, lng: -118.2437 }; // Los Angeles
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

