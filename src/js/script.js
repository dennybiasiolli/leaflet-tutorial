var mymap = L.map('mapid').setView([51.505, -0.09], 13);

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

OpenStreetMap_Mapnik.addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
circle.bindPopup('I am a circle.');

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);
polygon.bindPopup('I am a polygon.');

var popup = L.popup()
  .setLatLng([51.5, -0.09])
  .setContent('I am a standalone popup.')
  .openOn(mymap);

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent('You clicked the map at ' + e.latlng.toString())
    .openOn(mymap);
}
mymap.on('click', onMapClick);
