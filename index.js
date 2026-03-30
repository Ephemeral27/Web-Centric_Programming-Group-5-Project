document.addEventListener("DOMContentLoaded", function(){

    const cards = document.querySelectorAll(".work");

    cards.forEach(function(card){

        card.addEventListener("mouseover", function(){
            card.style.transform = "scale(1.05)";
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseout", function(){
            card.style.transform = "scale(1)";
        });

        card.addEventListener("click", function(){
            card.style.backgroundColor = "#E6CBCF";
            card.style.color = "#111827";
        });

    });

    const intro = document.querySelector(".intro");

    const message = document.createElement("p");
    message.textContent = "Click any feature to start improving your life today!";
    message.style.fontWeight = "600";
    message.style.marginTop = "10px";

    intro.appendChild(message);

});
