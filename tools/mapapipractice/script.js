(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([37.629678, -122.437760], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([37.630521, -122.465376]).addTo(map);
    marker.bindPopup("<b>Skyline College</b><br> This is the community college I graduated from before transfering to Davis :)").openPopup();
    var marker = L.marker([37.625272, -122.474923]).addTo(map);
    marker.bindPopup("<b>SF Archers</b><br> My favorite place to practice when I go home to visit my mom. It's called SF Archers, but it's actually located in Pacifica :P").openPopup();
    var marker = L.marker([37.635367, -122.411547]).addTo(map);
    marker.bindPopup("<b>Taqueria San Bruno</b><br> The best taqueria, hands down. The super burritos are amazing. I get one every time I visit.").openPopup();

}());