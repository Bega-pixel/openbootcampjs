// Initialize and add the map
let location, map;
function initMap() {
    // The location of Uluru
    const uluru = { lat: 40.7127753, lng: -74.0059728 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    location.push(
        new google.maps.Marker({
          position: {
            lat: 6.0328948,
            lng: 80.2167912,
          },
          map,
          title: "1location",
        })
      );
      location.push(
        new google.maps.Marker({
          position: {
            lat: -1.5951396,
            lng: 105.6647142,
          },
          map,
          title: "2location",
        })
      );
      location.push(
        new google.maps.Marker({
          position: {
            lat: 25.7181184,
            lng: 119.6187852,
          },
          map,
          title: "El Palmar",
        })
      );
    }
  
  window.initMap = initMap;