// Leaflet.js config
var mymap = L.map('mapid').setView([49.283573300634295, 8.174943016471122], 12);
var marker = L.marker([49.283573300634295, 8.174943016471122]).addTo(mymap);
var circle = L.circle([49.283573300634295, 8.174943016471122], {
    color: '#FFE9B0',
    fillColor: '#FFE9B0',
    fillOpacity: 0.5,
    radius: 500,
    
}).addTo(mymap);
var popup = L.popup()
    .setLatLng([49.283573300634295, 8.174943016471122])
    .setContent("Besucht uns hier in Venningen")
    .openOn(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 28,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWhyd24iLCJhIjoiY2tuOTE1MWRyMTNkaDJxcDlmOHJ5eWZ2MSJ9.VBwQGG91ikG3B62rbiwhlw',
}).addTo(mymap);
// Leaflet.js-end