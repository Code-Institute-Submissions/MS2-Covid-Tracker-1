// Map using Leaflet JS

var mapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});
 
var map = L.map("map", {
    layers: [mapTileLayers],
    center: [120.3873, 17.5705],
    zoom: 10
});

// var myMarker = L.marker([53.350140, -6.266155]).addTo(map);  - remove this if not needed 


// When I click on the county, the location of the marker will change

$("#country").on("change", function () {
            var countryData = $(this).val().split(","),
                MapLat = countryData[0],
                MapLng = countryData[1],
                MapZoom = parseInt(countryData[2]);
            map.flyTo([MapLat, MapLng], MapZoom);
        });
