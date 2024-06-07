
  mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style : "mapbox://styles/mapbox/streets-v12",
    center: coordinates, // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  console.log(coordinates)
      // Create a default Marker and add it to the map.
      const marker1 = new mapboxgl.Marker({color : "red"})
      .setLngLat(coordinates)
      .addTo(map);