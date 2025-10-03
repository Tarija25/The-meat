// 🌍 Preserve your map setup
function initMap() {
  const location = { lat: -21.535, lng: -64.729 }; // Tarija, Bolivia
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}


