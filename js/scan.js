
  
    window.addEventListener('load', function () {
      let selectedDeviceId;
      var database = firebase.database();
      const codeReader = new ZXing.BrowserMultiFormatReader()
      console.log('ZXing code reader initialized')
      codeReader.listVideoInputDevices()
      this.document.getElementById("submitbarcodebtn").addEventListener("click",function(){
        var inputBarcode= document.getElementById('rezlt').value;

        var colacola=[12345678, "1231231313", "5012345678900","5000112597318","5000112636864",
          "5000112642773","5000112636871","5000112597363","5000112597349","5000112597370","5000112597356",
          "5000112634136","5000112633801","5449000141521","5000112620115","42357445","42357469","5060517889937",
          "5060517887704","5060337502238","5060166693732","5060639122325","5060639122295","5060335636287","5060517885267",
          "5060517882822","54492653","5449000265104","5060466517202","5449000265098","7090000248161",
          "5000112636932","5000112626476","5000112626476","7026595400325","5000112636925","5000112636833",
          "7090000248093","5000112637380","5449000273536","5449000273543","7090000248062","5000112636918",
          "7090000248208","5000112637595","5000112636857","5000112636826","5000112636901","5000112640755",
          "5000112636895","7026595400387","90370953","90382475","5000112630244","5449000279828","5060466516304",
          "5060608740130","5060466516335","5000112633795","5000112634129","5000112650723"];

          if(colacola.includes(inputBarcode)){
            alert("next page")
          }else{

            alert ("This bottle cant be recycled")
          }
        console.log(colacola.includes(inputBarcode)); //if true then proceed otherwise stay or prevent submitting
          

      });
      codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {

        
  
        if (result) {
      
          const auth= firebase.auth();
          document.getElementById('rezlt').value=result;
          this.document.getElementById("submitbarcodebtn").addEventListener("click",function(){

           console.log("working");

          });

  
          var colacola=[12345678, "1231231313", "5012345678900","5000112597318","5000112636864",
          "5000112642773","5000112636871","5000112597363","5000112597349","5000112597370","5000112597356",
          "5000112634136","5000112633801","5449000141521","5000112620115","42357445","42357469","5060517889937",
          "5060517887704","5060337502238","5060166693732","5060639122325","5060639122295","5060335636287","5060517885267",
          "5060517882822","54492653","5449000265104","5060466517202","5449000265098","7090000248161",
          "5000112636932","5000112626476","5000112626476","7026595400325","5000112636925","5000112636833",
          "7090000248093","5000112637380","5449000273536","5449000273543","7090000248062","5000112636918",
          "7090000248208","5000112637595","5000112636857","5000112636826","5000112636901","5000112640755",
          "5000112636895","7026595400387","90370953","90382475","5000112630244","5449000279828","5060466516304",
          "5060608740130","5060466516335","5000112633795","5000112634129","5000112650723"];

          var pepsi=["7044610874685","7044610874678","7044610875057","7044610876177","7044610874661","7044610874326",
        "7044610875040","7044610038018","7310070003263","7044610874654"];

        var ringnes=["7044610874012","7044610870991","7045710033033","7044610871103","7044610873190","7044610871110",
      "7044610874531","7044610874555","7044610874548","7044610874579","7044610874876","7044610874869","7044610874746","7044610874760",
    "7044610874784","7044610874753","7044610874135",,"7044610875316",,"7044610874135"];

    var tine=["7038010063398","7038010063404","7038010063367","7038010063381","7038010063374"]

    var otherCompanies=["7090041230064","7340131600674","7044610874890","7044613875405","5000112636840",
  "5000112642759","7044613875504","7044610875484","5410188036688","7025110168559","7025110168047",
"70441610874180","7023720067002","8243018210","8728500996334","7035790610620","7037120014962",
"7340131600902","6415600543712","5000112626308","500112630572","5060517882853","5060517882822",
"500382104766","7310070003263","7350042718153","70646286727","500112637397","500112639001","7055080002560",
"7055080002546","7055080002508","6415600005326","7044610873701","7044610873688","8002270074295","8002270074288",
"72480000088","72480000019","72480000002","5060639122325","70315400090910","7340131602036",
"7072638000045","90435287","90433498","7090030660070","682430182107","613008739058","613008730734",
"506038190416","5060381910515","5060381910577","7044610874739","705508002546","7055080002553","7040518525049","7090041230057",
"5000112640526","7044610875033","6415600555098","703801063336","5449000279828",
"90382475","5000112639018","5000112642933","7044610874449","7350042717965","506039122295","7072152000002",
"7072152000019","7310070003584","7090040631855","7090000248161","5060751215073","5060639126095","6415600565578"
,"6415600565547","90446573","5060751212812","70117813","70117776",
"70118445","70118476","70117783","70117769","70118018","70118001","70118025","7040518520310","7040518520334","7040518520914",
"7040518520389","7040518507403","7040518525063","7040518510434","7040518551178","7040518527111",
"7040518527128","7040518520327","7040518520303","7040518551161","7040518551192","7350042717651",
"7611612221771","7611612221788","7044610799490","7044610806228","7350042717842","7350042718160",
"7350042718153","7340131600674","7340131601657","7340131601565","7340131600919","7044610875316","7032069731437"
,"7040518520310","7040518520334","7040518520914","7040518520389","7040518507403","7040518525063",
"7040518510434","7040518551178","7040518527111","7040518527128","7040518520327","7040518520303",
"7040518551161","7040518551192"]

          for (let i=0; i < colacola.length; i++){

      if (result==colacola[i]) {
    

    var email =firebase.auth().currentUser && firebase.auth().currentUser.email
    var uid = firebase.auth().currentUser.uid;
    var coce = firebase.database().ref().child('bottles').child("colacola comapany")
    coce.transaction(function(result) {
       return result + 1;
       console.log(FirebaseUser);
    });

    var emailToFirebase = firebase.database().ref().child(uid).child("users/");
    emailToFirebase.update({email});
    
    setTimeout(function(){
   
     window.location.href="soundclas.html"
     }, 500);
    
    
    return

  } for (let i=0; i < pepsi.length; i++) {

    if (result==pepsi[i]) {
    

      var email =firebase.auth().currentUser && firebase.auth().currentUser.email
      var uid = firebase.auth().currentUser.uid;
      var coce = firebase.database().ref().child('bottles').child("Pepsi comapany")
      coce.transaction(function(result) {
         return result + 1;
         console.log(FirebaseUser);
      });
  
      var emailToFirebase = firebase.database().ref().child(uid).child("users/");
      emailToFirebase.update({email});
      
  
      setTimeout(function(){
        window.location.href="soundclas.html"
       }, 500);
      
      return
  
    }


  } for (let i=0; i < ringnes.length; i++) {

    if (result==ringnes[i]) {
    

      var email =firebase.auth().currentUser && firebase.auth().currentUser.email
      var uid = firebase.auth().currentUser.uid;
      var coce = firebase.database().ref().child('bottles').child("Ringnes comapany")
      coce.transaction(function(result) {
         return result + 1;
         console.log(FirebaseUser);
      });
  
      var emailToFirebase = firebase.database().ref().child(uid).child("users/");
      emailToFirebase.update({email});
      
  
      setTimeout(function(){
        window.location.href="soundclas.html"
       }, 500);
      
      
      return
  
    }


  } 

  for (let i=0; i < otherCompanies.length; i++) {

    if (result==otherCompanies[i]) {
          var uid = firebase.auth().currentUser.uid;
      var coce = firebase.database().ref().child('bottles').child("other comapanies")
      coce.transaction(function(result) {
         return result + 1;
         console.log(FirebaseUser);
      });
    
      setTimeout(function(){
        window.location.href="soundclas.html"
       }, 500);
      
      
      return
  
    }


  }
  
  document.getElementById('rezlt').textContent = result.text
}

    
   
if (err && !(err instanceof ZXing.NotFoundException)) {
console.error(err)
document.getElementById('rezlt').textContent = err
}

  else{
    this.alert("This bottle/can cant by recycled with us")
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
  
    backbtn.addEventListener("click", () =>{
      window.location.href="home.html";
    });
   
  
  
  
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  firebase.analytics();
  

  //fix input and design and gooo!!!!!!!!!!
  