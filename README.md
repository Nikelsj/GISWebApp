# GISWebApp
The application allows user to upload, create, edit, modify, and download geospatial data in kml and PNG format. The web application has functionalities of switching base layer, Legend, geocoding, shapefile upload and export

The application is built on client server model. Leaflet on the client side makes request to server side. Apache web server respond to the client by calling to Geoserver or database. Geoserver interact with database on demand to fetch the data. Leaflet is used to design Graphical User Interface while Geoserver for middleware and PostGIS as Database storage.<br><br>
Toogle menu bar at left side provides list of subpages. Each page has different functionality. The index page of application has three Basemap layers: OSM, Satellite imagery, google street and LULC thematic layer. <br>
Draw tool can be used to draw geometric shapes.<br>
Geocoding toolbar allows for quick search of any address in current map extent.<br>
Buffer tool is utilized to generate buffer for geometries drawn. <br>
Delete feature button clears the map on click. <br>
Export features converts features drawn on the map from geojson to kml which then can be downloaded to computer. <br><br>
![image](https://user-images.githubusercontent.com/50727403/97994958-edeae580-1e0b-11eb-92fc-32336c9139ba.png)
