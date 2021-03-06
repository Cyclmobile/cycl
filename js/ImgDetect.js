let video=document.getElementById("webcam-container");
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.setAttribute('playsinline', '');

    // More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

    // the link to your model provided by Teachable Machine export panel
    const URL = "https://teachablemachine.withgoogle.com/models/EsjN-zGhN/";


    var backbtn=document.getElementById("backbtn");

    backbtn.addEventListener("click",function(){
      window.location.href="home.html"
    });

    function load(){
      document.getElementById("text2").style.display="block";
    }
    function hidetxt(){
      document.getElementById("text1").style.display="none";
      document.getElementById("text3").style.display="none";
      document.getElementById("loading").style.display="none";

    }

 

  

    let model, webcam, labelContainer, maxPredictions;

    let isIos = false; 
    // fix when running demo in ios, video will be frozen;
    if (window.navigator.userAgent.indexOf('iPhone') > -1 || window.navigator.userAgent.indexOf('iPad') > -1) {
      isIos = true;
    }

    // Load the image model and setup the webcam
    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = false; // whether to flip the webcam
        const width = 550;
        const height = 550;
        webcam = new tmImage.Webcam(width, height); // width, height, flip
        await webcam.setup( { facingMode: "environment" } ); // request access to the webcam

        if (isIos) {
            document.getElementById('webcam-container').appendChild(webcam.webcam); // webcam object needs to be added in any case to make this work on iOS
            // grab video-object in any way you want and set the attributes
            const webCamVideo = document.getElementsByTagName('video')[0];
            webCamVideo.setAttribute("playsinline", true); // written with "setAttribute" bc. iOS buggs otherwise
            webCamVideo.muted = "true";
            webCamVideo.style.width = width + 'px';
            webCamVideo.style.height = height + 'px';
        } else {
            document.getElementById("webcam-container").appendChild(webcam.canvas);
        }

        try {
            // append elements to the DOM
            // if (isIos) {
            //     document.getElementById("webcam-container").appendChild(webcam.webcam);
            // }
            // else{
            //     document.getElementById("webcam-container").appendChild(webcam.canvas);
            // }
            labelContainer = document.getElementById("label-container");
            for (let i = 0; i < maxPredictions; i++) { // and class labels
                 labelContainer.appendChild(document.createElement("div"));
            }
            await webcam.play() ? console.log("working") : console.log("not working");
            window.requestAnimationFrame(loop);
        }
        catch(e) {
            console.log('Catch an error: ', e)
        }
    } 

    //executes the init function
    init()

    async function loop() {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        // const prediction;
        // if (isIos) {
        //     prediction = await model.predict(webcam.webcam);
        // } else {
        //     prediction = await model.predict(webcam.canvas);
        // }
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
            console.log(classPrediction);

            var Imagedetect=document.getElementById("label-container");
                document.getElementById("bottleshow").innerHTML=classPrediction;
                hidetxt()
                load()

               var recycled=prediction[1].probability.toFixed(2);
                var Stn=prediction[0].probability.toFixed(2);
                var TooFar=prediction[2].probability.toFixed(2);
                var hold= prediction[3].probability.toFixed(2);
                var bottleOut=prediction[4].probability.toFixed(2);
                var RecycleInfo=document.getElementById('info');
                var DropLight=document.getElementById('DropColor')
                
                console.log(prediction[1].className +  " " + prediction[1].probability.toFixed(2));

                let isRecycled;

                if(recycled >= 0.90){
                  isRecycled=true
                }else{
                  isRecycled=false
                }
                
                function Recycle(){
                  if (Stn > 0.00){
                       RecycleInfo.innerHTML='Please hold the bottle top of the hole'
                       DropLight.style.borderColor='red';
                       return false;//prevent form submission
                     } else if (TooFar > 0.00){
                       RecycleInfo.innerHTML= 'Move the camera closer to your hand &#128721'
                       DropLight.style.borderColor='red';
                       return false;//prevent form submission
                     } else if (bottleOut >= 0.05){
                           RecycleInfo.innerHTML='Hold the bottle from the side'
                           DropLight.style.borderColor='red';
                           return false;//prevent form submission
                     } else if (hold >= 1.00){
                         setTimeout(() => {
                             RecycleInfo.innerHTML='Drop your bottle carefully &#128516; &#9851'
                             DropLight.style.borderColor='green';
                             return false;//prevent form submission
                             
                         }, 3000);
                 
                     }
                         return false;//prevent form submission

                }

                function recyclestage(){
                  if (isRecycled === true){
                    location.href="completrecycl.html"
                  }else{
                    Recycle()
                  }
                }

                recyclestage()
                    
                
        }
    }
//<br> *Take your hand away after drop