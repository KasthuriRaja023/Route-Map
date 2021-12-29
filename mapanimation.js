// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [77.348119, 11.098432],
  [77.345970, 11.088243],
  [77.343402, 1.081500],
  [77.339991, 11.071279],
  [77.334411, 11.059294],
  [77.314670, 11.038407],
  [77.287886, 10.994497],
  [77.227661, 11.000024],
  [77.184202, 11.017548],
  [77.158161, 11.026613],
  [77.135825, 11.027992],
  [77.131418, 11.028174],
  [77.132041, 11.025751]
];
 
// TODO: add your own access token
mapboxgl.accessToken='pk.eyJ1Ijoia2FzdGh1cmlyYWphMDIzIiwiYSI6ImNreGU1dTg4OTF2YTAybm8xNG55d3dqNjkifQ.yUWnGDQWQyMt1umb1jwAow'

 
// This is the map instance
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [77.348119, 11.098432],
  zoom: 10,
});
 
// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker= new mapboxgl.Marker()
.setLngLat([77.348119, 11.098432])
.addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  setTimeout(() => {
    if(counter>=busStops.length)return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();    
  }, 1000);

  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
}
