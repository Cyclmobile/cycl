
  
    window.addEventListener('load', function () {
        let selectedDeviceId;
        var count=0;
        var database = firebase.database();
        const codeReader = new ZXing.BrowserMultiFormatReader()
        console.log('ZXing code reader initialized')
        codeReader.listVideoInputDevices()
    
        codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
    
    
          if (result) {
        
            const auth= firebase.auth();
            console.log(result)
    
            var station="5012345678900";
            var msg=document.getElementById("message");
  
        if (result==station) {
      
      var station_bag = firebase.database().ref().child('place').child("butik1")
      station_bag.transaction(function(result) {
          msg.innerHTML="beholderen er nå tom"
         return result = 0;
         
         console.log(FirebaseUser);
      });
      
      return
  
    } 
    
    document.getElementById('rezlt').textContent = result.text
    document.getElementById("counter").innerHTML= count;
  
  if (err && !(err instanceof ZXing.NotFoundException)) {
  console.error(err)
  document.getElementById('rezlt').textContent = err
  }
  
    else{
      this.alert("")
    }
  
  }
    
        /* find the fuck out of the auth  firebase.auth().onAuthStateChanged(FirebaseUser => {
            if (FirebaseUser) {
              window.open("index.html");
              console.log(FirebaseUser);
            }else {
              console.log("not logged in");
            }
          });*/
    
    
           
        })
        console.log(`Started continous decode from camera with id ${selectedDeviceId}`)
      })
    
      // document.getElementById('resetButton').addEventListener('click', () => {
      //   codeReader.reset()
      //   document.getElementById('result').textContent = '';
      //   console.log('Reset.')
      // })
    
    
    
    
    
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
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
   

    