let map = L.map('mapid').setView([40.679364, -73.936697], 10.55);

L.tileLayer('https://api.mapbox.com/styles/v1/chrisdecara/clp33v8a300zi01ns93c1a9sl/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2hyaXNkZWNhcmEiLCJhIjoiY2xwMzR1ODI0MHdvbzJscDV0a3VpOG95eiJ9.NIJcmo4S8ZdrU04H1HArEw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

let marker1 = L.marker([40.689247, -74.044502]).addTo(map);
let marker2 = L.marker([40.748817, -73.985428]).addTo(map);
let marker3 = L.marker([40.650002, -73.949997]).addTo(map);
let marker4 = L.marker([40.574879, -73.9786]).addTo(map);

marker1.bindPopup("<b>Statue of Liberty</b><br>A symbol for freedom, towering high above the Hudson River").openPopup();
marker2.bindPopup("<b>Empire State Building</b><br>One of the tallest buildings in New York City");
marker3.bindPopup("<b>Brooklyn Bridge</b><br>A feat of architecture, spanning across the East River to connect Manhattan and Brooklyn");
marker4.bindPopup("<b>Coney Island</b><br>The home of New York City's world-famous amusement park");