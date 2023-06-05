require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",

  "esri/widgets/BasemapToggle",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Search"

], function (esriConfig, Map, MapView, BasemapToggle, BasemapGallery, Search) {
  esriConfig.apiKey = "AAPK56def8cbf3434b1cb07dac4b48c06c35drmrUkaCWRjecumEQB12aAfsXXc7DaGViFGqUUDU9rRh4QmR3rQRFgMcCslP1wbR";

  const map = new Map({
    basemap: "arcgis-navigation" // Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [0, 8], // Longitude, latitude
    zoom: 12, // Zoom level
    container: "viewDiv" // Div element
  });

  const basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "arcgis-imagery"
  });

  view.ui.add(basemapToggle, "bottom-right");

  const basemapGallery = new BasemapGallery({
    view: view,
    source: {
      query: {
        title: '"World Basemaps for Developers" AND owner:esri'
      }
    }
  });

  view.ui.add(basemapGallery, "top-right"); // Add to the view

  const search = new Search({
    view: view
  });
  view.ui.add(search, "bottom-left");

}
);