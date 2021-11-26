(function (){
    const firebaseConfig = {
      apiKey: "AIzaSyAV2_eu5cnRDNp5eq9AjTuX8q0XiRT3EZw",
      authDomain: "cycl-e6998.firebaseapp.com",
      databaseURL: "https://cycl-e6998.firebaseio.com",
      projectId: "cycl-e6998",
      storageBucket: "cycl-e6998.appspot.com",
      messagingSenderId: "16228296144",
      appId: "1:16228296144:web:a60e1aaa1ee9d8f4aa05d5",
      measurementId: "G-3BVVW1GDNC"
    };
  
    var app = {
        // Application Constructor
        initialize: function() {
            this.bindEvents();
        },
        // Bind Event Listeners
        //
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },
        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicitly call 'app.receivedEvent(...);'
        onDeviceReady: function() {
            app.receivedEvent('deviceready');
        },
        // Update DOM on a Received Event
        receivedEvent: function(id) {
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');
  
            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
  
            console.log('Received Event: ' + id);
        }
    };
  
    firebase.initializeApp(firebaseConfig);
  
  var scnnrbtn=document.getElementById("scannbtn");
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
        window.location.href=("securereturn.html")
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
  }
  });
  
  
  //kart
  
  
  
  
  }());
  