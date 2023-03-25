const mapElement = document.getElementById('map');
const buttonElement = document.getElementById('btn');

function getLocation() {
  if (localStorage.getItem('lat')) {
    buttonElement.disabled = true;
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    buttonElement.disabled = true;
  } else {
    mapElement.innerText = 'Sorry, your browser does not support Geolocation.';
  }
}

function showPosition(position) {
  localStorage.setItem('lat', position.coords.latitude);
  localStorage.setItem('long', position.coords.longitude);
  mapElement.innerHTML = `<iframe src="https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&output=embed"></iframe>`;
}

function removeLocation() {
  buttonElement.disabled = false;
  localStorage.removeItem('lat');
  localStorage.removeItem('long');
}
