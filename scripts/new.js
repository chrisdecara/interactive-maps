let map = L.map('mapid').setView([29.388177, 26.687077], 5.37);

L.tileLayer('https://api.mapbox.com/styles/v1/chrisdecara/clp33v8a300zi01ns93c1a9sl/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2hyaXNkZWNhcmEiLCJhIjoiY2xwMzR1ODI0MHdvbzJscDV0a3VpOG95eiJ9.NIJcmo4S8ZdrU04H1HArEw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);