document.getElementById("submit").onclick = function(e){
	var files = document.getElementById('file').files;
	if (files.length == 0) {
	  return; //do nothing if no file given yet
  }

  var file = files[0];

  if (file.name.slice(-3) != 'zip'){ //Demo only tested for .zip. All others, return.
		document.getElementById('warning').innerHTML = 'Select .zip file';
    return;
  } else {
  	document.getElementById('warning').innerHTML = ''; //clear warning message.
    handleZipFile(file);
  }
};

//More info: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
function handleZipFile(file){
	var reader = new FileReader();
  reader.onload = function(){
	  if (reader.readyState != 2 || reader.error){
		  return;
	  } else {
		  convertToLayer(reader.result);
  	}
  }
  reader.readAsArrayBuffer(file);
}

function convertToLayer(buffer){
	shp(buffer).then(function(geojson){	//More info: https://github.com/calvinmetcalf/shapefile-js
    var layer = L.shapefile(geojson).addTo(map);
		 map.fitBounds(layer.getBounds());//More info: https://github.com/calvinmetcalf/leaflet.shapefile
    console.log(layer);
  });
}
