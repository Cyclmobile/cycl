const firebaseConfig = {
    apiKey: "AIzaSyDTR4_vw3x8pTxIAiS8Y0-3T4APCwotpyg",
    authDomain: "cycl-77b6c.firebaseapp.com",
    databaseURL: "https://cycl-77b6c.firebaseio.com",
    projectId: "cycl-77b6c",
    storageBucket: "cycl-77b6c.appspot.com",
    messagingSenderId: "139900263133",
    appId: "1:139900263133:web:9c72ae1fd6569fe6a1d934",
    measurementId: "G-VPV104NQQW"
  };

  firebase.initializeApp(firebaseConfig);


  function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }
  var locations = [
	['Telia', 59.93067532797181,10.800927328315474, 1],
	['Grønland', 59.93058763289664,10.800830763760457, 2],
	//['C.berner', 59.926434272313195,10.776520445492853, 3],
	['Title D', 3.19125,101.710052, 4]
];
		 var visited= 0;
		 var d= new Date();
		 var h= d.getHours();

		 var bagcount = 0;
		 var bag2=false;

		 function checkconnection(){
			 if(!navigator.online){
				 alert("No internet connection")
			 }
		 }

		 //checking if is full
		 //include it on the click
		 function checkbag(){


			 var bagcounter= firebase.database().ref().child('place').child("butik1");
			 bagcounter.transaction(function(bagcount) {

				 var bagcapicity=document.getElementById("bagQauntity");
				 var fullbag=500;
				 var percentToGet=100;
				 var percent= Math.round( (bagcount/fullbag)* 100);

				 bagcapicity.innerHTML=percent + "% full" ;



			 if (bagcount >= 500 ) {
				 var scnrbtn=document.getElementById("scannbtn");
				 scnrbtn.disabled=true;
				 scnrbtn.textContent="this station is full";
				 alert("The bag is full. Please contact employee or use another station");
				 span.onclick = function() {
					 modal.style.display = "none";
					 return;
				 }
			 }else {
				 return  bagcount;
			 }
		 });

		 
		 }
		 var bagcountr2=0

		 function checkbag2(){

			var bagcount = firebase.database().ref("place/").child("bag2");
			bagcount.transaction(function(bagcountr2) {
			   return bagcountr2 + 1;
			});

			var bagcounter2= firebase.database().ref().child('place').child("bag2");
			bagcounter2.transaction(function(bagcountr2) {

				var bagcapicity=document.getElementById("bagQauntity");
				var fullbag=500;
				var percentToGet=100;
				var percent= Math.round( (bagcountr2/fullbag)* 100);

				bagcapicity.innerHTML=percent + "% full" ;



			if (bagcountr2 >= 500 ) {
				var scnrbtn=document.getElementById("scannbtn");
				scnrbtn.disabled=true;
				scnrbtn.textContent="this station is full";
				alert("The bag is full. Please contact employee or use another station");
				span.onclick = function() {
					modal.style.display = "none";
					return;
				}
			}else {
				return  bagcountr2;
			}
		});

		
		}
		 //full bag check ends here

	

		 function initMap() {
			 //hidebusineses
			 
			 
			 var opt = { minZoom: 6, maxZoom: 20 
				[
					{
					 featureType: "poi.business",
					 elementType: "labels",
					 stylers: [
					   { visibility: "off" }
					 ]
				   }
				 ]};
				 var styleArray = [
					{
					 featureType: "poi.business",
					 elementType: "labels",
					 stylers: [
					   { visibility: "off" }
					 ]
				   }
				 ];
			 map = new google.maps.Map(document.getElementById('map'), {
				 center: {lat: 59.911293,lng: 10.748979},
				 zoom: 17,
				 mapTypeId: google.maps.MapTypeId.ROADMAP,
				 minZoom: 7,
				 maxZoom: 20,
				 zoomControl: false,
				 fullscreenControl: false ,
				 streetViewControl: false,
				 disableDefaultUI: true,
				 styles:styleArray,
				 clickableIcons: false,
				 

			 });

			 map.setOptions(opt);
			 

			 var modal = document.getElementById("myModal");

			 // Get the <span> element that closes the modal
			 var span = document.getElementsByClassName("close")[0];

			
			 var marker, i;

for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
         position: new google.maps.LatLng(locations[i][1], locations[i][2],locations[i][3]),
         map: map,icon:'Images/40.png',
    });
	google.maps.event.addListener(marker, 'click', (function(marker, i) {

		return function() {
			span.onclick = function() {
				modal.style.display = "none";
			  }
 
			  // When the user clicks anywhere outside of the modal, close it
			  window.onclick = function(event) {
				if (event.target == modal) {
				  modal.style.display = "none";
				}
			  }
			
			switch (locations[i]) {
				case locations[0]:
					document.getElementById("returnstation").innerHTML="1003"
					document.getElementById("place").innerHTML="Telia Kontor"
					document.getElementById("adress").innerHTML="Lørenfaret 1"
					var loader= document.getElementById("loaderspinn")
					loader.style.display="block"
					
					navigator.geolocation.getCurrentPosition(
						function(position) {
							var latLngA = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
							var latLngB = new google.maps.LatLng(559.93067532797181,10.800927328315474);
							var distance = google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB);
							
							
							
											//change the kilometers to display the box
							if (distance > 400) {
					alert("You are far from the current station");
					loader.style.display="none"
					span.onclick = function() {
					modal.style.display = "none";
					return;
					}
	
					}else {

						var bagcount = firebase.database().ref("place/").child("bag");
						bagcount.transaction(function(bagcountr) {
						   return bagcountr + 1;
						});
			
						var bagcounter= firebase.database().ref().child('place').child("bag");
						bagcounter.transaction(function(bagcountr) {
			
							var bagcapicity=document.getElementById("bagQauntity");
							var fullbag=500;
							var percent= Math.round( (bagcountr/fullbag)* 100);
			
							bagcapicity.innerHTML=percent + "% full" ;
			
			
			
						if (bagcountr >= 500 ) {
							var scnrbtn=document.getElementById("scannbtn");
							scnrbtn.disabled=true;
							scnrbtn.textContent="this station is full";
							alert("The bag is full. Please contact employee or use another station");
							span.onclick = function() {
								modal.style.display = "none";
								return;
							}
						}else {
							return  bagcountr;
						}
					});

						
					modal.style.display="block";}
					loader.style.display="none"
						});
					
					
					return;
				case locations[1]:
					document.getElementById("returnstation").innerHTML="1002"
					document.getElementById("place").innerHTML="backstub"
					document.getElementById("adress").innerHTML="Grønland torg 1"
					var loader= document.getElementById("loaderspinn")
					loader.style.display="block"

					navigator.geolocation.getCurrentPosition(
						function(position) {
							var latLngA = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
							var latLngB = new google.maps.LatLng(59.93058763289664,10.800830763760457);
							var distance = google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB);
							
							
							
											//change the kilometers to display the box
							if (distance > 4000) {
					
					alert("You are far from the current station");
					loader.style.display="none"
					span.onclick = function() {
					modal.style.display = "none";
					return;
					}
	
					}else {

					checkbag2()
					//if not to far show display and bagcheck
					modal.style.display="block";}
					loader.style.display="none"
						});

					return;
				case locations[2]:
					alert("3")
					return;
				case locations[3]:
					alert("4")
					return;
				 }
		  }
		})(marker, i));
	  }

			 // Try HTML5 geolocation.
			 if (navigator.geolocation) {

				var bluedot=null;

				 var watchID=navigator.geolocation.watchPosition(function(position) {
					 //gjør denne om til en marker
					 var currentpos = {
						 timeout: Infinity,
						 maximumAge:0,
						 enableHighAccuracy: true,
						 lat: position.coords.latitude,
						 lng: position.coords.longitude,
						 icon:"Images/40.png",
						 minZoom: 7,
						 maxZoom: 14,
						 zoom: 17

					 };
					 // TODO: fix this thing under, you are close in sha Allah
					  var bluedot = new google.maps.Marker({
						position: watchID,
						map: map,
						icon: {
						  path: google.maps.SymbolPath.CIRCLE,
						  scale: 10,
						  fillOpacity: 1,
						  strokeWeight: 2,
						  fillColor: '#5384ED',
						  strokeColor: '#ffffff',
						  zoom: 17
						  
						},
					  });
					  					


					 map.setCenter(currentpos);
					 bluedot.setPosition(currentpos);
					

					 setInterval(function(){
						bluedot.setMap(null);

					 },1200)

					 //try timeout
					// To add the marker to the map, call setMap();
					
					
					
					/*setInterval(function(){
						// To remove the marker from the map
					bluedot.setMap(null);
					 },1000)*/
					
					 

					 

				 });

			 } else {
				 // Browser doesn't support Geolocation
				 handleLocationError(false, bluedot, map.getCenter());
			 }

			 
		 }
		 function checkgetLocation(){
			navigator.geolocation.watchPosition(function(position) {

				var currentpos = {
					timeout: Infinity,
					maximumAge:0,
					enableHighAccuracy: true,
					lat: position.coords.latitude,
					lng: position.coords.longitude,
					icon:"Images/40.png",
					minZoom: 7,
					maxZoom: 14,
					zoom: 17

				};
				var bluedot = new google.maps.Marker({
					position: currentpos,
					map: map,
					icon: {
					  path: google.maps.SymbolPath.CIRCLE,
					  scale: 10,
					  fillOpacity: 1,
					  strokeWeight: 2,
					  fillColor: '#5384ED',
					  strokeColor: '#ffffff',
					  zoom: 17
					  
					},
				  });


				map.setCenter(currentpos);
					 bluedot.setPosition(currentpos);
					

				console.log("i'm tracking you!");
			  },
			  function(error) {
				if (error.code == error.PERMISSION_DENIED)
				alert("please enable your gps")
				console.log("you denied location services");
				var locationbtn=document.getElementById("updtbtn");
				var locationisoff=document.getElementById("locationoffbtn");
				locationisoff.style.display="block"
				locationbtn.style.display="none"
			  });
		}
		 

		
		function getLocation() {    
			if(navigator.geolocation) {
				locationisoff.style.display="block"
				locationbtn.style.display="none"

				navigator.geolocation.getCurrentPosition(showPosition, positionError);
		
			} else {
				hideLoadingDiv()
				showError('Geolocation is not supported by this device')
			}
		}
		
		function positionError() {
			hideLoadingDiv()
			locationbtn.style.display="none"
			locationisoff.style.display="block"
			showError('Geolocation is not enabled. Please enable to use this feature')
			alert("Your gps location is disabled")
		}
		

		 var updtbtn = document.getElementById("updtbtn");
		 updtbtn.addEventListener("click",function(){
			checkgetLocation();
			positionError()
			

		 })

		 function handleLocationError(browserHasGeolocation, bluedot, pos) {
			bluedot.setPosition(pos);
			bluedot.setContent(
			  browserHasGeolocation
				? "Error: The Geolocation service failed."
				: "Error: Your browser doesn't support geolocation."
			);
			bluedot.open(map);
		  }

		 

          // Get the modal
	 var modal = document.getElementById("myModal");

	 // Get the button that opens the modal
	 var btn = document.getElementById("myBtn");

	 // Get the <span> element that closes the modal
	 var span = document.getElementsByClassName("close")[0];



	 // When the user clicks on <span> (x), close the modal
	 span.onclick = function() {
	   modal.style.display = "none";
	 }

	 // When the user clicks anywhere outside of the modal, close it
	 window.onclick = function(event) {
	   if (event.target == modal) {
	     modal.style.display = "none";
	   }
	 }


var scnnrbtn=document.getElementById("scannbtn");
var profile=document.getElementById("hideprofile");
var signout=document.getElementById("hidesignoff");
var redeem=document.getElementById("redeem");
var signin=document.getElementById("hidesignin");
var database = firebase.database();
var user = firebase.auth().currentUser;
var email= firebase.auth().currentUser && firebase.auth().currentUser.email;
var signoutbtn=document.getElementById("logoff");



scnnrbtn.addEventListener("click", function(){
  firebase.auth().onAuthStateChanged(FirebaseUser => {


    if (FirebaseUser) {
      window.location.href=("scanner.html")
      console.log(FirebaseUser);
    }else {
      console.log("not logged in");
      window.location.href=("login.html");
    }

    var users = firebase.database().child(uid).child("users/");

    users.push ({
       info: {
          email: email

       }
    });

    });
    var uid= firebase.auth().currentUser.uid;

});
signout.addEventListener("click", function(){
  firebase.auth().signOut();
});

redeem.addEventListener("click",function(){
  window.location.href=("Redeem.html")
});

firebase.auth().onAuthStateChanged(FirebaseUser => {
if (FirebaseUser) {
  console.log(FirebaseUser);
  signin.style.display="none";

}else {
  console.log("not logged in");
  signoutbtn.style.display = "none";
  redeem.style.display="none";
  profile.style.display="none";
}

});

	 