function Recycle(){
                  if (recycled >= 0.90){
                    window.location.href="completrecycl.html"
                    return false;//prevent form submission
                   } else if (Stn > 0.00){
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
                             RecycleInfo.innerHTML='Drop your bottle carefully &#128516; &#9851 <br> *Take your hand away after drop'
                             DropLight.style.borderColor='green';
                             return false;//prevent form submission
                             
                         }, 3000);
                 
                     }
                         return false;//prevent form submission

                }
                    
                Recycle()
