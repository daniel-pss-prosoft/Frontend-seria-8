"use strict";
window.addEventListener("DOMContentLoaded", function() {
  function itemsQuantity() {
    var count = 1;
    var countEl = document.getElementById("count");
    var plusButton = document.getElementById("plus");
    plusButton.addEventListener("click", function() {
      count++;
      countEl.innerHTML = count;
    });
    var minusButton = document.getElementById("minus");
    minusButton.addEventListener("click", function() {
      if (count > 1) {
        count--;
        countEl.innerHTML = count;
      }
    });
  }
  itemsQuantity();

  function requestXHR(requestData) {
    var xhr = new XMLHttpRequest();

    xhr.open(requestData.method, requestData.url);

    xhr.onload = function() {
      if (requestData.callbackFunction !== null) {
        requestData.callbackFunction(xhr.responseText);
      }
    };

    xhr.onerror = function() {
      alert("Sorry, we could not find what you were looking for.");
    };

    xhr.send(JSON.stringify(requestData.data));
  };

});
