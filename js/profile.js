
  (function (){

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
  
  
  firebase.auth().onAuthStateChanged(FirebaseUser => {
    if (FirebaseUser) {
  
  
      var uid=firebase.auth().currentUser.uid;
      var database=firebase.database();
      var editname=document.getElementById("editname");
      var editemail=document.getElementById("editemail");

      editname.addEventListener("click",function(){
        window.location.href="edit.html"
      })

      editemail.addEventListener("click",function(){
        window.location.href="edit.html"
      })

      var totalrecycle = database.ref().child("bottles").child("colacola comapany");
      totalrecycle.on('value', function(snapshot) {
        document.getElementById('recycled').innerHTML="Recycled in total " + snapshot.val();
      });


      var namefirebase = database.ref().child(uid).child('users').child("name");
      namefirebase.on('value', function(snapshot) {
        document.getElementById('firebasename').innerHTML= snapshot.val();;
      });
  
      var emailfirebase = database.ref().child(uid).child('users').child("email");
      emailfirebase.on('value', function(snapshot) {
        document.getElementById('firebasemail').innerHTML= snapshot.val();;
      });

      var backbtn=document.getElementById("backbtn");
       backbtn.addEventListener("click",function(){
      window.location.href="home.html"
    });
      console.log(FirebaseUser);
    }else {
      console.log("not logged in");
    }
  });


  
  
  //var emailToFirebase = firebase.database().ref().child(uid).child("users/");
  //emailToFirebase.update({email});

  
  
  }());