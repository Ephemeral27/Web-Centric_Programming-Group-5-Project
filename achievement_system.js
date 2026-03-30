document.addEventListener("DOMContentLoaded", function(){

    const bars = document.querySelectorAll(".progress");

    bars.forEach(function(bar){

        bar.addEventListener("click", function(){

            let width = 0;

            const interval = setInterval(function(){

                if(width >= 100){
                    clearInterval(interval);

                    const unlocked = document.createElement("span");
                    unlocked.textContent = " ✓ Badge Unlocked!";
                    unlocked.style.marginLeft = "10px";
                    unlocked.style.fontWeight = "bold";
                    unlocked.style.color = "#E6CBCF";

                    bar.parentElement.appendChild(unlocked);

                }else{
                    width += 10;
                    bar.style.width = width + "%";
                }

            },50);

        });

    });

});
