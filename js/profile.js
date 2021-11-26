
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
        document.getElementById('recycled').innerHTML="Total recycled " + snapshot.val();
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
      window.location.href="index.html"
    });
      console.log(FirebaseUser);
    }else {
      console.log("not logged in");
    }
  });


  
  
  //var emailToFirebase = firebase.database().ref().child(uid).child("users/");
  //emailToFirebase.update({email});

  
  
  }());