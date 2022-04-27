//Firebase & navigation

const firebaseConfig = {
  apiKey: "AIzaSyDTR4_vw3x8pTxIAiS8Y0-3T4APCwotpyg",
  authDomain: "cycl-77b6c.firebaseapp.com",
  databaseURL: "https://cycl-77b6c.firebaseio.com",
  projectId: "cycl-77b6c",
  storageBucket: "cycl-77b6c.appspot.com",
  messagingSenderId: "139900263133",
  appId: "1:139900263133:web:9c72ae1fd6569fe6a1d934",
  measurementId: "G-VPV104NQQW",
};

firebase.initializeApp(firebaseConfig);

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

mapboxgl.accessToken =
  "pk.eyJ1IjoiY3ljbG1vYmlsZWFwcCIsImEiOiJja3lxODBqYmwwYW10Mnd0Z2dxdDZxZGF2In0.ElRjKCz4QVFOQ8l_0hJjSw";
const map = new mapboxgl.Map({
  flyTo: { duration: 0 },
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [10.743482389383416, 59.908113321340466], // starting position
  zoom: 16, // starting zoom
  maxZoom: 20,
  minZoom: 5,
});

// Add geolocate control to the map.
/*map.addControl(
			new mapboxgl.GeolocateControl({
			positionOptions: {
			enableHighAccuracy: true
			},
			
			);*/
// Initialize the geolocate control.
var geolocate = new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true,
  },
  // When active the map will receive updates to the device's location as it changes.
  trackUserLocation: true,
});

// Add the control to the map.
map.addControl(geolocate);
map.on("load", function () {
  geolocate.trigger(); //<- Automatically activates geolocation
});

//markers

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        message: "1002",
        iconSize: [50, 50],
      },
      geometry: {
        type: "Point",
        coordinates: [10.800186028081384, 59.93037787027734],
      },
    },
    {
      type: "Feature",
      properties: {
        message: "1003",
        iconSize: [50, 50],
      },
      geometry: {
        type: "Point",
        coordinates: [10.799808823702392, 59.93047248965732],
      },
    },
    /*{
					'type': 'Feature',
					'properties': {
					'message': '1004',
					'iconSize': [50, 50]
					},
					'geometry': {
					'type': 'Point',
					'coordinates': [10.775725586708518,59.92644802399647]
					}
					}*/
  ],
};

var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Add markers to the map.
for (const marker of geojson.features) {
  // Create a DOM element for each marker.
  const el = document.createElement("div");
  const width = marker.properties.iconSize[0];
  const height = marker.properties.iconSize[1];
  el.className = "marker";
  el.style.backgroundImage = `url('Images/logo.png')`;
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.backgroundSize = "100%";

  new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

  //Location distance
  geolocate.on("geolocate", function (e) {
    var lon = e.coords.longitude;
    var lat = e.coords.latitude;
    var position = [lon, lat];
    //console.log(position);

    var from = position; //lng, lat
    var to = marker.geometry.coordinates; //lng, lat
    var modal = document.getElementById("myModal");

    var options = {
      units: "miles",
    };

    var distance = turf.distance(to, from, options);
    console.log(distance);

    //Marker onclick
    //gives wrong output for bagcount
    el.addEventListener("click", () => {
      if (distance > 1.036) {
        var divAlert = document.getElementById("alertdiv");
        //gi den 3 sec delay
        divAlert.style.display = "block";
        var close = document
          .getElementById("closeAlert")
          .addEventListener("click", function () {
            divAlert.style.display = "none";
          });
      } else {
        switch (marker.properties.message) {
          case "1002":
            modal.style.display = "block";
            document.getElementById("returnstation").innerHTML = "1002";
            document.getElementById("place").innerHTML = "Telia   ";
            document.getElementById("adress").innerHTML = "Løren 1";

            var divAlert = document.getElementById("alertdiv");
            divAlert.style.display = "none";
            return bagcount();

            break;
            return;
          case "1003":
            modal.style.display = "block";
            document.getElementById("returnstation").innerHTML = "1003";
            document.getElementById("place").innerHTML = "Backstube";
            document.getElementById("adress").innerHTML = "C.berner";
            bagcount();
            var divAlert = document.getElementById("alertdiv");
            divAlert.style.display = "none";
            return;
            break;

          case "1004":
            modal.style.display = "block";
            document.getElementById("returnstation").innerHTML = "1004";
            document.getElementById("place").innerHTML = "Circle K";
            document.getElementById("adress").innerHTML = "Økern";
            var divAlert = document.getElementById("alertdiv");
            divAlert.style.display = "none";
            bagcount();
            return;
            break;
        }

        //function bagcounter
        function bagcount() {
          switch (marker.properties.message) {
            case "1002":
              var bagcounter = firebase
                .database()
                .ref()
                .child("place")
                .child("bag");
              checkbag();
              var bagcount = firebase.database().ref("place/").child("bag");
              bagcount.transaction(function (bagcountr) {
                return bagcountr + 1;
              });

              break;
            case "1003":
              var bagcounter = firebase
                .database()
                .ref()
                .child("place")
                .child("bag3");
              checkbag();
              modal.style.display = "block";
              var bagcount = firebase.database().ref("place/").child("bag3");
              bagcount.transaction(function (bagcountr) {
                return bagcountr + 1;
              });

              break;

            case "1004":
              modal.style.display = "block";
              var bagcount = firebase.database().ref("place/").child("bag4");
              bagcount.transaction(function (bagcountr) {
                return bagcountr + 1;
              });
              var bagcounter = firebase
                .database()
                .ref()
                .child("place")
                .child("bag4");
              checkbag();

              break;
          }

          function checkbag() {
            bagcounter.transaction(function (bagcountr) {
              var bagcapicity = document.getElementById("bagQauntity");
              var fullbag = 500;
              var percent = Math.round((bagcountr / fullbag) * 100);
              bagcapicity.innerHTML = percent + "% full";

              if (bagcountr > 500) {
                modal.style.display = "none";
                var bagfullAlert = document.getElementById("fullbagAlert");

                bagfullAlert.style.display = "block";
                var closeAlertBag = document
                  .getElementById("closeFullbagAlert")
                  .addEventListener("click", function () {
                    bagfullAlert.style.display = "none";
                  });

                return;
              } else {
                modal.style.display = "block";
                return bagcountr;
              }
            });
          }
        }
        var span = document.getElementsByClassName("close")[0];
      }
    });
  });
}

//check if signed in

var scnnrbtn = document.getElementById("scannbtn");
var profile = document.getElementById("hideprofile");
var signout = document.getElementById("hidesignoff");
var redeem = document.getElementById("redeem");
var signin = document.getElementById("hidesignin");
var database = firebase.database();
var user = firebase.auth().currentUser;
var email = firebase.auth().currentUser && firebase.auth().currentUser.email;
var signoutbtn = document.getElementById("logoff");

scnnrbtn.addEventListener("click", function () {
  firebase.auth().onAuthStateChanged((FirebaseUser) => {
    if (FirebaseUser) {
      window.location.href = "scanner.html";
      console.log(FirebaseUser);
    } else {
      console.log("not logged in");
      window.location.href = "login.html";
    }

    var users = firebase.database().child(uid).child("users/");

    users.push({
      info: {
        email: email,
      },
    });
  });
  var uid = firebase.auth().currentUser.uid;
});
signout.addEventListener("click", function () {
  firebase.auth().signOut();
});

redeem.addEventListener("click", function () {
  window.location.href = "Redeem.html";
});

firebase.auth().onAuthStateChanged((FirebaseUser) => {
  if (FirebaseUser) {
    console.log(FirebaseUser);
    signin.style.display = "none";
  } else {
    console.log("not logged in");
    signoutbtn.style.display = "none";
    redeem.style.display = "none";
    profile.style.display = "none";
  }
});
