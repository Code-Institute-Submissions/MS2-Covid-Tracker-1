// Leaflet JS GeoJason Markers 

var myMap = {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -6.924550,52.835970 ]
    },
    "properties": {
    "County":"Carlow",
    "Cases":399
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -6.248889,53.333056 ]
    },
    "properties": {
    "County":"Dublin",
    "Cases":12609
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -6.4575,52.334167 ]
    },
    "properties": {
    "County":"Wexford",
    "Cases":224
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -6.049444,52.975 ]
    },
    "properties": {
    "County":"Wicklow",
    "Cases":712
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -7.301870,53.034300 ]
    },
    "properties": {
    "County":"Laois",
    "Cases":370
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -7.499989,53.249999 ]
    },
    "properties": {
    "County":"Offaly",
    "Cases":638
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -6.540900,53.950932 ]
    },
    "properties": {
    "County":"Louth",
    "Cases":795
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -6.909000,53.159828 ]
    },
    "properties": {
    "County":"Kildare",
    "Cases":1651
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -6.724580,53.887218 ]
    },
    "properties": {
    "County":"Meath",
    "Cases":831
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -7.944620,53.425049 ]
    },
    "properties": {
    "County":"Westmeath",
    "Cases":767
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -7.252222,52.654167 ]
    },
    "properties": {
    "County":"Kilkenny",
    "Cases":360
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -7.8,53.733333 ]
    },
    "properties": {
    "County":"Longford",
    "Cases":705
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -9,52.83333 ]
    },
    "properties": {
    "County":"Clare",
    "Cases":399
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -8.495833,51.898611 ]
    },
    "properties": {
    "County":"Cork",
    "Cases":1570
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -9.506940,52.059792 ]
    },
    "properties": {
    "County":"Kerry",
    "Cases":318
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -8.623056,52.664722 ]
    },
    "properties": {
    "County":"Limerick",
    "Cases":610
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -8.157200,52.474880 ]
    },
    "properties": {
    "County":"Tipperary",
    "Cases":545
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -7.111944,52.258333 ]
    },
    "properties": {
    "County":"Waterford",
    "Cases":166
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -9.048889,53.271944 ]
    },
    "properties": {
    "County":"Galway",
    "Cases":498
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -8.109760,54.018150 ]
    },
    "properties": {
    "County":"Leitrim",
    "Cases":265
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -6.227780,54.155880 ]
    },
    "properties": {
    "County":"Mayo",
    "Cases":584
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -8.183333,53.633333 ]
    },
    "properties": {
    "County":"Roscommon",
    "Cases":536
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -8.483333,54.266667 ]
    },
    "properties": {
    "County":"Sligo",
    "Cases":229
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -7.360556,53.990833 ]
    },
    "properties": {
    "County":"Cavan",
    "Cases":1150
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -8.116667,54.65 ]
    },
    "properties": {
    "County":"Donegal",
    "Cases":476
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -6.966667,54.25 ]
    },
    "properties": {
    "County":"Monaghan",
    "Cases":883
    }
  }
]
}
L.geoJSON(myMap, {

    onEachFeature : countyInfo

}).addTo(map);

function countyInfo (feature, layer) {
    layer.bindPopup("<p>County Name:" + feature.properties.County + "<p>Number of Cases:" + feature.properties.Cases);    
}
