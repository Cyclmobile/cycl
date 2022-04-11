const activateBtn = document.getElementById("activate");
const overlayCoupon = document.getElementById("overlay-coupon");
const closeOverlayCard = document.getElementById("backbtnoverlay");
const reward = document.querySelector(".reward");

//Firebase
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

//this is inside the card
const tasks = [
  {
    image: "Images/dwimg.jpeg",
    title: "Daniel Wellington",
    price: "15 CC",
    description: "15% off everything you buy",
    button: "Claim",
    list: "",
    CheckedImg: "Images/activated.png",
  },
  {
    image: "Images/barber.jpg",
    title: "20% Discount haircut",
    price: "55 CC",
    description: "20% discount for haircut in selected barbershops",
    button: "Claim",
    discreption: "Get 20% discount for haircut at these barber shops,",
    list: "<a href=>OMAR BARBERSHOP</a>",
    // <ul>
    //   <li><a href="">OMAR BARBERSHOP</a></li>
    // </ul>"
  },
  {
    image: "Images/odeonimg.jpg",
    title: "25% off for movie tickets",
    price: "150 CC",
    description: "Get 25% discount for cinema tickets at Odeon",
    button: "Claim",
    list: "",
  },
];


firebase.auth().onAuthStateChanged(function(user) {
  
    console.log(user);
    let uid = firebase.auth().currentUser.uid;
    let newBalance=0;
    var BalanceDb = firebase.database().ref().child(uid).child("users").child("amount");

BalanceDb.on("value", function(snapshot) {
  newBalance= snapshot.val();
   console.log(snapshot.val());
   document.getElementById("amountaccount").innerHTML = newBalance + " CC";
   console.log(newBalance);
}, function (error) {
   console.log("Error: " + error.code);
});

    // function refreshResults() {
    //   document.getElementById("amountaccount").innerHTML =
    //   newBalance + " CC";
    //   if (newBalance == 70) {
    //     //alert("you have 70")
    //     console.log(newBalance);
    //   } else {
    //     newBalance = 0;
    //   }
    // }
    // User is signed in.
 
});



//make it so it only takes from amount
function amountCounterDatabase(cost,coupon) {

  let uid = firebase.auth().currentUser.uid;

      const costNumber = parseInt(cost.replace(" cc", ""), 10);
      var amountcounterFirebase= firebase.database().ref().child(uid).child('users').child("amount");
      amountcounterFirebase.transaction(function(amountcounter) {
        if (  amountcounter < costNumber ) {
          coupon==false
        alert("Insufficient account balance")
      }else {
        coupon==true
        return  amountcounter - costNumber;
        
        

      }
    });

  // var uid = firebase.auth().currentUser.uid;
  // let amountCounterFirebase;
  // let newAmount;
  // alert('assax')

  // const amountRef = firebase.database().ref(`${uid}/users/amount`);

  // const a = amountRef.on("value", (snap) => {
  //   const amount = snap.val();
  //   amountCounterFirebase = amount;
  //   const costNumber = parseInt(cost.replace(" cc", ""), 10);

  //   if (amount < 1) {
  //     return alert("you dont have enough Cycl Coins");
  //   } else {
  //     newAmount = amount - costNumber;
  //     const update = {};
  //     update[`${uid}/users/`] = { amount: newAmount };
  //     firebase.database().ref().update(update);
  //   }
  // });
}

//hva er index?
// tasks.map((task, index) => {
//   const data = JSON.stringify(task);
//   reward.innerHTML += `
// <div class="cardshow">
// <img class="imgclass" src="${task.image}" alt="Avatar">
// <h3>${task.title}</h3>
// <h4> ${task.price}</h4>
// <p> ${task.description}</p>
// <button class="btncard" onclick="showDetail('${encodeURIComponent(
//     data
//   )}', null, '${index + 1}')"> ${task.button} </button>
// </div>
// `;
// });

function showDetail(task, coupon, index) {
  const data = JSON.parse(decodeURIComponent(task));
  if (coupon==true) {
    overlayCoupon.innerHTML = `
    <div class="cardoverlay">

    <span id="backbtnoverlay" onclick="closeCard()" style="position: relative;left: 40%;">&times;</span> 
    <img
      id="aproveImg"
      src='Images/activated.png'
      style="
        width: 90px;
        height: 90px;
        position: absolute;
        top: 10%;
        object-fit: cover;
        object-position: 50% 50%;
        display: block;
      "
    />
    <h4 style="text-align: center"><b>${data.title}</b></h4>
    <img
      class="imgclass"
      src=${data.image}
      alt="Avatar"
      style="width: 100%"
    />
    <h2 style="text-align: center">${data.price}</h2>
    <p style="text-align: center">${data.description}</p>
   
              
    <p style={{margin-bottom: -200px}}>COUPON: ${coupon}</p>
    <button class="btn" id="activate" onclick="alert('Activated')" >Activated</button>
    <div id="countdown"></div>
  </div>
    `;
  } else {
    overlayCoupon.innerHTML = `
      <div class="cardoverlay">
  
      <span id="backbtnoverlay" onclick="closeCard()" style="position: relative;left: 40%;">&times;</span> 
      <img 
      onclick="aprovedeimg()"
        id="aproveImg"
        src="Images/activated.png"
        style="
          width: 90px;
          height: 90px;
          position: absolute;
          top: 10%;
          object-fit: cover;
          object-position: 50% 50%;
          display: none;
        "
      />
      <h4 style="text-align: center"><b>${data.title}</b></h4>
      <img
        class="imgclass"
        src=${data.image}
        alt="Avatar"
        style="width: 100%"
      />
      <h2 style="text-align: center">${data.price}</h2>
      <p style="text-align: center">${data.description}</p>
      <p style="text-align: center"> ${data.list} </p>
                
      <button class="btn" id="activate" onclick="getCoupon('${task}', '${index}',)" >Activate</button>
      <div id="countdown"></div>
    </div>
      `;
  }
  overlayCoupon.style.display = "block";
}

function aprovedeimg() {
  const imgAproved = document.getElementById("aproveImg");
  imgAproved.style.display = "block";
}

function closeCard() {
  const imgAproved = document.getElementById("aproveImg");
  overlayCoupon.style.display = "none";
  overlayCoupon.innerHTML = "";
  imgAproved.style.display = "none";
}

async function getCoupon(task, type) {
  const decodeTask = JSON.parse(decodeURIComponent(task));
  const data = {
    market: "NO",
    programId: 1657214553,
    channelId: 1703965087,
  };

  //type definerer hvilket kort innholdet skal være i
  const adVendor =
    type === "1"
      ? "https://api.adtraction.com/v2/affiliate/offers/?token=486DD3496AAA36C1B9D6D7F92C66A3073084E57F"
      : type == "2"
      ? ""
      : "";

      //hvordan kjøre kortene uten coupon

  if (adVendor.length > 1) {
    const req = await fetch(adVendor, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    if (req.status === 200) {
      const date =new Date(res[0].validTo)
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      const string= "Click here to use your coupon code on checkout";
      const website= string.link("https://adtr.co/X9ovTH");
      console.log("res::", day);

      showDetail(task, res[0].offerCoupon + ": VALID TO: " + `${year}/${month}/${day}` +
      ' '+ website);
    } else {
      return alert("Something went wrong, please try again!");
    }
    // validTo: console.log(res[4]);
  } else {
    showDetail(task, `successfully charged ${decodeTask.price}`);
  }

  const final = amountCounterDatabase(decodeTask.price);
  console.log("FINAL::", final);
}

//FIREBASEUSER
firebase.auth().onAuthStateChanged(function (user) {
  reward.innerHTML = "Loading...";
  if (user) {
    reward.innerHTML = "";
    console.log("User online");
    tasks.map((task, index) => {
      const data = JSON.stringify(task);
      reward.innerHTML += `
      <div class="cardshow">
      <img class="imgclass" src="${task.image}" alt="Avatar">
      <h3>${task.title}</h3>
      <h4> ${task.price}</h4>
      <p> ${task.description}</p>
      <button class="btncard" onclick="showDetail('${encodeURIComponent(
        data
      )}', null, '${index + 1}')"> ${task.button} </button>
      </div>
      `;
    });

  
    // User is signed in.
  } else {
    console.log("noUser");
    reward.innerHTML = "You need to be signed in to see the various offers!";
    // No user is signed in.
  }
});

/*qari everything
fix showdetails
show me how to add second reklame
fix dates/ time format
divide valid*/

//API from adraction
// var request = new XMLHttpRequest();

// request.open('POST', 'https://api.adtraction.com/v2/affiliate/offers/?token=486DD3496AAA36C1B9D6D7F92C66A3073084E57F');

// request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// var body = {
//   'market': 'NO',
//   'programId': 1480334788,
//   'channelId': 1703965087
// };

// request.send(JSON.stringify(body));
