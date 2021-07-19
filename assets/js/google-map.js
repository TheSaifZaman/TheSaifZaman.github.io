function initMap() {
	
	var location = {
		lat: 24.369513119002633,
		lng: 88.61051758411016
	};
	
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 14,
		scrollwheel: false,
		center: location,
		styles: []
	});
	
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		title: 'Md. Saif Zaman'
	});
}