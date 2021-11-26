
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
      var editmail=document.getElementById("editemail");
      var editname=document.getElementById("editname");

      var namefirebase = database.ref().child(uid).child('users').child("name");
      namefirebase.on('value', function(snapshot) {
        editname.value= snapshot.val();
      });
  
      var emailfirebase = database.ref().child(uid).child('users').child("email");
      emailfirebase.on('value', function(snapshot) {
       editmail.value= snapshot.val();;
      });

      function inputonclick(){

        var updatebtn=document.getElementById("updatebtn");
        var editname=document.getElementById('editname').oninput = () => {
            updatebtn.style.display="block"
          }
         var editmail=document.getElementById('editemail').oninput = () => {
            updatebtn.style.display="block"
          }

      }

      inputonclick();


      function updateprofile(){

        var editmail=document.getElementById("editemail");
        var editname=document.getElementById("editname");
        var updatebtn=document.getElementById("updatebtn");

        var updatename=editname.value;
        var updateemail=editmail.value;

        var users = firebase.database().ref().child(uid).child("users/");
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(editmail.value))
  {
        users.update ({
           
              email: updateemail,
              name: updatename,
           
        });
    }
      }

      updatebtn.addEventListener("click",function(){
            updateprofile();
            window.location.href="index.html";
    })



      console.log(FirebaseUser);
    }else {
      console.log("not logged in");
    }
  });


  
  
  //var emailToFirebase = firebase.database().ref().child(uid).child("users/");
  //emailToFirebase.update({email});

  
  
  }());