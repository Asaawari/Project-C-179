mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhYXdhcmlzYWhhaSIsImEiOiJja3VvMGdpd3MyNnN3MnBuNjd5YmMxbGgxIn0.K-e55kiTiuq-0mKKAR4eRg'
let latitude, longitude, destination

$(document).ready(function(){
	alert("please allow the device to know your location");
	initGeoLocation();
})

$(function(){
	$("#navigate-button").click(function(){
		window.location.href= `ar_weather.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
	})
})

function initGeoLocation(){
	if(navigator.geolocation){

		navigator.geolocation.getCurrentPosition(success);
	}
	else
	{
		alert("Sorry, your browser does not support geolocation services.");
	}
}

function success(position){
	console.log(position);

	longitude = position.coords.longitude;
	latitude = position.coords.latitude;

	mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhYXdhcmlzYWhhaSIsImEiOiJja3VvMGdpd3MyNnN3MnBuNjd5YmMxbGgxIn0.K-e55kiTiuq-0mKKAR4eRg';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 1
	});   

    var image1 = document.querySelector("#redfort")
    var marker1=new mapboxgl.Marker({ element: image1 }).setLngLat([77.14218268150486, 29.19669754673242]).addTo(map)

    var image2 = document.querySelector("#operahouse")
    var marker2=new mapboxgl.Marker({ element: image2 }).setLngLat([151.21592969923984, -33.85672201360164]).addTo(map)

    var image3 = document.querySelector("#buckingham")
    var marker3=new mapboxgl.Marker({ element: image3 }).setLngLat([-0.1415194768121433, 51.50152383165781]).addTo(map)

    var image4 = document.querySelector("#giza")
    var marker4=new mapboxgl.Marker({ element: image4 }).setLngLat([31.134614700503885, 29.97938054308702]).addTo(map)

    var image5 = document.querySelector("#liberty")
    var marker5=new mapboxgl.Marker({ element: image5 }).setLngLat([-74.04454331727251, 40.68947716486518]).addTo(map)
	
	map.addControl(
		new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true
		})
	);

	map.on("click",function(e){
		destination = e.lngLat;
	})
	
}

