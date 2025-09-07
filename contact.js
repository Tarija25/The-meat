// 🌍 Preserve your map setup
function initMap() {
  const location = { lat: -21.5355, lng: -64.7290 }; // Los Angeles
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const payload = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      message: document.getElementById('msg').value.trim(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    db.collection('contacts').add(payload)
      .then(() => {
        alert('Mensaje enviado correctamente');
        form.reset();
      })
      .catch(err => {
        console.error('Error writing to Firestore:', err);
        alert('Hubo un error al enviar el mensaje');
      });
  });
});

