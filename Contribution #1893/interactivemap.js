// JavaScript to Initialize Interactive Map (using Google Maps API)
function initMap() {
    var location = { lat: 12.9716, lng: 77.5946 }; // Example coordinates
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
