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

  function loadRedeem(){
    var loader=document.getElementById("loadprchpg")
    loader.style.display="none"
  }

  loadRedeem()



  firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(FirebaseUser => {
  if (FirebaseUser) {

    var amountcounter = 0;
    var donated= 0;
    

    function donation_cc(){
      inputDonate = parseInt(document.getElementById("donateInput").value)
      var inputDonateInt = parseInt(inputDonate);

       //var inputDonate=parseInt(document.getElementById("donateInput").value);

		   var donationFirebase = firebase.database().ref("donation/").child("donation CC");
		   donationFirebase.transaction(function(donated) {
         alert ("You have donated " + inputDonate)
		      return donated + inputDonateInt;
		   });
		 }


/*fix this*/
     function takeFromDonation(){

      var inputDonate=document.getElementById("donateInput");
      var inputamount=inputDonate.value;
      var amountcounterFirebase= firebase.database().ref().child(uid).child('users').child("amount");
      amountcounterFirebase.transaction(function(amountcounter) {
        if (amountcounter < inputamount ) {
        alert("Insufficient account balance")
      }else {
        return  amountcounter - inputamount;
        

      }
    });

     }

     /*fix this*/

    function amountcounterdatabase(){
      var amountcounterFirebase= firebase.database().ref().child(uid).child('users').child("amount");
      amountcounterFirebase.transaction(function(amountcounter) {
        
      if (amountcounter < 15 ) {
        alert("you dont have enough Cycl Coins")
      }else {
        activatedCoupon();
        activate.textContent="activated"

        var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds";
  }
  timeleft -= 1;
}, 1000);
        return  amountcounter - 15;
        

      }
    });
    }

    function couponSoda(){
      var amountcounterFirebase= firebase.database().ref().child(uid).child('users').child("amount");
      amountcounterFirebase.transaction(function(amountcounter) {
        
      if (amountcounter < 55 ) {
        alert("you dont have enough Cycl Coins")
      }else {
         activatedCouponSoda();
       activateSodaCoupon.textContent="Activated"

          var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown2").innerHTML = "Finished";
  } else {
    document.getElementById("countdown2").innerHTML = timeleft + " seconds ";
  }
  timeleft -= 1;
}, 1000);
       
        return  amountcounter - 55;

      }
    });
    }

    function couponfood(){
      var amountcounterFirebase= firebase.database().ref().child(uid).child('users').child("amount");
      amountcounterFirebase.transaction(function(amountcounter) {
        
      if (amountcounter < 150 ) {
        alert("you dont have enough Cycl Coins")
      }else {
        activatedCouponFood();
        activateFoodCoupon.textContent="Activated";

           var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown3").innerHTML = "Finished";
  } else {
    document.getElementById("countdown3").innerHTML = timeleft + " seconds";
  }
  timeleft -= 1;
}, 1000);

        return  amountcounter - 150;
      }
    });
    }

    function donation(){
      var inputDonate=document.getElementById("donateInput");
      var inputamount=inputDonate.value;
      var amountcounterFirebase= firebase.database().ref().child(uid).child('users').child("amount");
      amountcounterFirebase.transaction(function(amountcounter) {
        
      if (amountcounter < inputamount ) {
        alert("you dont have enough Cycl Coins")
      }else {
        donation_cc();
      }
    });
    }


    function refreshResults () {
      document.getElementById('amountaccount').innerHTML=  amountcounter + " CC";
      if (amountcounter == 70) {
        //alert("you have 70")
        console.log(amountcounter);
      }
      else {
        amountaccount=0;
      }

    }

    function activatedCoupon(){
      var showSeller=document.getElementById("textforseller");
      var imageAprove=document.getElementById("aproveImg");
      imageAprove.style.display="block";
      showSeller.textContent="Coupon approved"


    }

    function activatedCouponSoda(){
      var imageAprove=document.getElementById("aproveImgSoda");
      imageAprove.style.display="block";
      var showSeller_Soda=document.getElementById("textforsellersoda");
      showSeller_Soda.textContent="Coupon approved"
      
    }

    function activatedCouponFood(){
      var imageAproveFood=document.getElementById("aproveImgfood");
      imageAproveFood.style.display="block";
      var showSeller_food=document.getElementById("textforsellerfood");
      showSeller_food.textContent="Coupon approved"


    }

    var uid=firebase.auth().currentUser.uid;
    var database=firebase.database();
    var sodabtn=document.getElementById("sodabtn");
    var foodbtn=document.getElementById("foodbtn");
    var couponbtn=document.getElementById("redeembtn");
    var backbtn=document.getElementById("backbtn");
    var backbtnoverlay=document.getElementById("backbtnoverlay");
    var sodaBackbtnOverlays=document.getElementById("backbtnoverlaysoda");
    var activate=document.getElementById("activate");
    var overlay_coupon=document.getElementById("overlaycouponcoffee");
    var overlay_coupon_soda=document.getElementById("overlaycouponsoda");
    var activateSodaCoupon=document.getElementById("sodaActivation");
    var activateFoodCoupon=document.getElementById("activatefood");
    var backbtnOverlayFood=document.getElementById("backbtnoverlayfood");
    var Donatebtn=document.getElementById("donatebtn");
    var donationInput=document.getElementById("donateInput");
    


    var amountfirebase = database.ref().child(uid).child('users').child("amount");
    amountfirebase.on('value', function(snapshot) {
      amountcounter = snapshot.val();
      refreshResults();
    });

    backbtn.addEventListener("click",function(){
      window.location.href="home.html"
    });

    backbtnoverlay.addEventListener("click",function(){
      document.getElementById('overlaycouponcoffee').style.display='none';
      //hide overlay
    });
    sodaBackbtnOverlays.addEventListener("click",function(){
      document.getElementById('overlaycouponsoda').style.display='none';
      //hide overlay
    });

    backbtnOverlayFood.addEventListener("click",function(){
      document.getElementById('overlaycouponfood').style.display='none';
      //hide overlay
    });

    activate.addEventListener("click",function(){
      activate.disabled=true;
      setTimeout(() => {
        window.location.href="redeem.html"
            }, 10000);
      amountcounterdatabase()
    });

    activateSodaCoupon.addEventListener("click",function(){
      activateSodaCoupon.disabled=true;
      couponSoda()
      setTimeout(() => {
        window.location.href="redeem.html"
            }, 10000);
      //amountcounterdatabase()
    });

     activateFoodCoupon.addEventListener("click",function(){
      activateFoodCoupon.disabled=true;
      couponfood();
      setTimeout(() => {
        window.location.href="redeem.html" }, 10000);
    });


    sodabtn.addEventListener("click",function(){
    overlay_coupon_soda.style.display="block";

  });

  foodbtn.addEventListener("click",function(){
    document.getElementById("overlaycouponfood").style.display="block";

  });

  couponbtn.addEventListener("click",function(){
    overlay_coupon.style.display="block";

  });

   donatebtn.addEventListener("click",function(){
      donation();
      takeFromDonation()
      donationInput.value=" ";
      
    });

    console.log(FirebaseUser);
  }else {
    console.log("not logged in");
  }
});



//copy

// var amountfirebase=firebase.database().ref().child(uid).child("users/").child("amount");
// amountfirebase.on('value',function(snapshot){
// amountfirebase=snapshot.val();
// refreshResults();
// });
// document.getElementById("amountaccount").innerHTML= "You have " + amountfirebase + " CC";
//






//kart




}());