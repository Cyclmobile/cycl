(function(){

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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //get email and pass
  var name=document.getElementById("txtname");
  var txtphone=document.getElementById("phonenmbr");
  var txtemail=document.getElementById("email");
  var phone=document.getElementById("phonenmbr");
  var txtpassword=document.getElementById("passwrd");
  var btnsignup=document.getElementById("rgstr");
  var database = firebase.database();


  //  btnlogin.addEventListener("click", e=>{
  //   //get email and passwrd
  //   if (txtemail.value=="") {
  //     alert("please write your email adress")
  //
  //   }else {
  //
  //     var email=txtemail.value;
  //     var password=txtpassword.value;
  //     const auth= firebase.auth();
  //   //sign in
  //     const promise = auth.signInWithEmailAndPassword(email,password);
  //     promise.catch(e => console.log(e.message));
  //
  //   }
  //
  // });


  //add singup event
  btnsignup.addEventListener("click", e=>{
    //get email and pass
    //TODO CHECK 5 REAL EMAIL
      const email=txtemail.value;
      const password=txtpassword.value;
      const auth= firebase.auth();
      const registermessage=document.getElementById("registererror");
      //


     //sign in
   firebase.auth().createUserWithEmailAndPassword(email , password)
   .then(function(firebaseUser) {

    if (password.length < 6){
      alert("The password must be 6 characters long or more.")
    }
       // Success 

   })
  .catch(function(error) {
   alert("The email address is already in use by another account.")
       // Error Handling
  });

  });

  


  //realtile listener
  //we can check if we are logged in from here aswell
  //if user is loged in forward to the map.
  firebase.auth().onAuthStateChanged(FirebaseUser => {
    if (FirebaseUser) {

      var firstnlastname=name.value;
      var emailtext=txtemail.value;
      var phonetxt=phone.value;
      let amount=0;

      var uid= firebase.auth().currentUser.uid;

      var amountToFirebase = firebase.database().ref().child(uid).child("users/");
      amountToFirebase.update({amount});


      var users = firebase.database().ref().child(uid).child("users/");

                users.update ({
                   
                      email: emailtext,
                      name: firstnlastname,
                      phone:phonetxt,
                      



                   
                });



      window.location.href=("index.html")


      console.log(FirebaseUser);
    }else {
      console.log("not logged in");
    }
  });

}());