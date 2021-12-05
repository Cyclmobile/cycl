(function(){

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
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      //get email and pass
      var txtemail=document.getElementById("emailreset");
      var email=txtemail.value;
      var resetbutton=document.getElementById("resetbtn");
     
    
      
      resetbutton.addEventListener("click",function() {
          if(email==""){alert("please write your email adress")}
          else{ 
        var auth = firebase.auth();
var emailAddress = email;
auth.sendPasswordResetEmail(emailAddress)
.then(function() {  
})
.catch(function(error) {
// An error happened.
});
alert("Email sent")
}
      });
      //realtile listener
      //we can check if we are logged in from here aswell
      //if user is loged in forward to the map.
      firebase.auth().onAuthStateChanged(FirebaseUser => {
        if (FirebaseUser) {
          window.location.href=("home.html")
          console.log(FirebaseUser);
        }else {
          console.log("not logged in");
        }
      });
      
      }());
      
      // TODO: Verifes email adresses
      // TODO: email addresses has to be godkjent
      // TODO: Forgot passwrd fixing
      // TODO: redeeming
      // TODO: connect firebase to the respected stores and partners
      // TODO: kilometers
      //gps as icon
      // TODO: for extra fix the maps