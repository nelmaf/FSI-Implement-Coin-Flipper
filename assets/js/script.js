// TODO: Declare any global variables we need
let headRolls = 0;
let tailRolls = 0;
let total = headRolls + tailRolls;
let percentageHeads = 0;
let percentageTails = 0;


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // Flip Button Click Handler
    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById("flip").addEventListener("click",function(){
        //There is a 50 % chanve the value will be below 0.5
        let flippedHead = Math.random() < 0.5;
         // TODO: Determine flip outcome

        if(flippedHead){
            // TODO: Update image and status message in the DOM
            document.getElementById("penny-image").scr = "assets/images/penny-heads.jpg";
            document.getElementById("message").textContent = "You Flip heads";
            headRolls++;
        } else {
            document.getElementById("penny-image").scr = "assets/images/penny-tails.jpg";
            document.getElementById("message").textContent = "You Flip tails";
            tailRolls++;
        }
         // Update the scorboard
         // TODO: Calculate the total number of rolls/flips
        total = headRolls + tailRolls;
        console.log(total);

         // Make variables to track the percentages of heads and tails
        
              
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        
        if (total > 0){
            percentageHeads = Math.round((headRolls / total) * 100);
            percentageTails = Math.round((tailRolls / total) * 100);
        }

        // TODO: Update the display of each table cell
        document.getElementById("heads").textContent =  headRolls;
        document.getElementById("heads-percent").textContent = percentageHeads + "%";
        document.getElementById("tails").textContent = tailRolls;
        document.getElementById("tails-percent").textContent = percentageTails + "%";
    })
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
        document.getElementById("clear").addEventListener("click", function(){
            headRolls = 0;
            tailRolls = 0;
            total = headRolls + tailRolls;

            if (total > 0){
                percentageHeads = Math.round(headRolls / total)*100;
                percentageTails = Math.round(tailRolls / total)*100;
            }
            
            document.getElementById("message").textContent = "Let's get Rolling!"
            document.getElementById("heads").textContent =  headRolls;
            document.getElementById("heads-percent").textContent = percentageHeads + "%";
            document.getElementById("tails").textContent = tailRolls;
            document.getElementById("tails-percent").textContent = percentageTails + "%";
        })
})  