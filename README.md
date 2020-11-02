# GISWebApp
The application allows user to upload, create, edit, modify, and download geospatial data in kml and PNG format. The web application has functionalities of switching base layer, Legend, geocoding, shapefile upload and export

The application is built on client server model. Leaflet on the client side makes request to server side. Apache web server respond to the client by calling to Geoserver or database. Geoserver interact with database on demand to fetch the data. Leaflet is used to design Graphical User Interface while Geoserver for middleware and PostGIS as Database storage.
