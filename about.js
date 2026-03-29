document.addEventListener("DOMContentLoaded", function () {

    const services = document.querySelectorAll(".service");

    services.forEach(function (service) {

        
        service.addEventListener("mouseover", function () {
            service.style.transform = "scale(1.05)";
            service.style.transition = "0.3s";
        });

        
        service.addEventListener("mouseout", function () {
            service.style.transform = "scale(1)";
        });

        
        service.addEventListener("click", function () {
            service.style.backgroundColor = "#E6CBCF";
            service.style.color = "#111827";
        });

    });

});
