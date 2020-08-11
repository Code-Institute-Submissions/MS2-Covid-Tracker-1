 
 // Layer for each county
var mapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});
 
var map = L.map("map", {
    layers: [mapTileLayers],
    center: [53.350140, -6.266155],
    zoom: 5
});

var myMarker = L.marker([53.350140, -6.266155]).addTo(map);  


// 1. When I click on the county, the marker on the map will change 

$("#county").on("change", function () {
            var countyData = $(this).val().split(","),
                MapLat = countyData[0],
                MapLng = countyData[1],
                MapZoom = parseInt(countyData[2]);
            map.flyTo([MapLat, MapLng], MapZoom);
        });

