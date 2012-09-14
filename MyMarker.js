/** Extensión de un marcador **/

/*
* {Name:"",Location:{ lon: , lat: }}
*/

MyMarker = function  (data) {
	// dependencies
	var cMarker 	= OpenLayers.Marker,
		cLonLat		= OpenLayers.LonLat,
		cIcon 		= OpenLayers.Icon,
		cSize		= OpenLayers.Size,
		cPixel		= OpenLayers.Pixel,
	// Private attribute
		iconSize	= {w:24,h:24},
		imgPath		= "img/imgPerson.png"
		localLonLat = new cLonLat(data.Location.lon,
								data.Location.lat).transform(
												"EPSG:4326",
												"EPSG:900913"
												);
		;

	// Public attribute
	this.data = data;

	// Private function
	getIcon = function(){
		size = new cSize(iconSize.w,iconSize.h);
		offset = new cPixel(-iconSize.w/2,-iconSize.h/2);
		icon = new cIcon(imgPath,size,offset);
		return icon;
	}

	// Call father constructor
	OpenLayers.Marker.call(this,localLonLat,getIcon());
}

// Heredar de OpenLayers.Marker
MyMarker.prototype = new OpenLayers.Marker();