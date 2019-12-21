"use strict"
document.addEventListener("DOMContentLoaded", function(){

    function requestXHR(url, method, callbackFunction) {
        var xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = function () {
           
            callbackFunction(xhr.responseText);
            
        };

        xhr.onerror = function () {
            console.log("Sorry, we could't find what you're looking for.");
        };

        xhr.send();
    };
        
    function addPages (targetItem, targetContent) {
        document.querySelector(targetItem).innerHTML = targetContent;
    };
    requestXHR("./html/header.html", "GET", function(data) {
        addPages("#header", data);
    });
    requestXHR("./html/footer.html", "GET", function(data) {
        addPages("#footer", data);
    });
});