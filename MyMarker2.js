/* Marker 2 con el estilo de extensión de */

OpenLayers.MyMarker2 = OpenLayers.Class(OpenLayers.Marker,
{
	CLASS_NAME : "OpenLayers.MyMarker2",
	data : {},

	getIcon : function(){
		var iconSize	= {w:24,h:24},
			imgPath		= "img/imgPerson.png",
		size = new OpenLayers.Size(iconSize.w,iconSize.h),
		offset = new OpenLayers.Pixel(-iconSize.w/2,-iconSize.h/2);
		return new OpenLayers.Icon(imgPath,size,offset);
	},

	initialize : function (data) {
		
		var args = [];

		var lonlat = new OpenLayers.LonLat(data.Location.lon,data.Location.lat).transform(
												"EPSG:4326",
												"EPSG:900913"
												);

		var icon = this.getIcon();

		args.push(lonlat,icon);

		OpenLayers.Marker.prototype.initialize.apply(this,args);

	}

});