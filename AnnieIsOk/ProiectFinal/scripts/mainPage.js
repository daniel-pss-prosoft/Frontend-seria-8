"use strict";
window.addEventListener("DOMContentLoaded", function() {
  var productList = [];

  var currencyName = "RON";

  var productsDiv = document.querySelector("#products");

  var productTemplate = document.querySelector("#product-template");

  productTemplate.id = "";
  function addProduct(name, price, currency, imageUrl, description) {
    var newProduct = productTemplate.cloneNode(true);
    newProduct.classList.remove("hidden");

    newProduct.querySelector(".product-link").textContent = name;
    newProduct.querySelector("img").src = imageUrl;
    newProduct.querySelector(".price").textContent = price;
    newProduct.querySelector(".currency").textContent = currency;
    newProduct.querySelector(".product-description").textContent = description;
    newProduct.querySelector(".product-link").url = productUrl;
    productsDiv.appendChild(newProduct);
  }

  function sortItems(sortType) {
    if (productList.length === 0) {
      return;
    };
    if (sortType === "price-low") {
      productList.sort(function(item1, item2) {
        return item1.price - item2.price;
      });
    };
    if (sortType === "price-high") {
      productList.sort(function(item1, item2) {
        return item2.price - item1.price;
      });
    };

    if (sortType === "name-asc") {
      productList.sort(function(item1, item2) {
      return item1.name.toLowerCase().localeCompare(item2.name.toLowerCase());
      });
    };
    if (sortType === "name-desc") {
      productList.sort(function(item1, item2) {
        return item2.name
          .toLowerCase()
          .localeCompare(item1.name.toLowerCase());
      });
    };
    if (sortType === "initial-sort") {
      productList.sort(function(item1, item2) {
        return item1.productId - item2.productId;
      });
    };
  };

  function displayItems() {
    if (productList.length === 0) {
      loadProductList(populatePage);
    } else {
      populatePage();
    };
  };
  function populatePage() {
    productsDiv.innerHTML = "";
    productList.forEach(function(item) {
      if (item === null) {
        return;
      };
      addProduct(
        item.name,
        item.price,
        currencyName,
        item.image,
        item.description
      );
    });
  };

  function loadProductList(populatePageFunction) {
    var request = {
      url: "https://furniture-inc.firebaseio.com/.json",
      method: "GET",
      callbackFunction: function(data) {
        var parsedString = JSON.parse(data);
        if (parsedString instanceof Array === true) {
          productList = parsedString;
        } else if (typeof parsedString === "object" && parsedString !== null) {
          for (property in parsedString) {
            productList.push(parsedString[property]);
          };
        } else {
          console.warn("Warning: products could not be loaded!");
        };
        populatePageFunction();
      },
      data: null
    };

    requestXHR(request);
  };

  function requestXHR(requestData) {
    var xhr = new XMLHttpRequest();

    xhr.open(requestData.method, requestData.url);

    xhr.onload = function() {
      if (requestData.callbackFunction !== null) {
        requestData.callbackFunction(xhr.responseText);
      };
    };

    xhr.onerror = function() {
      console.log("Sorry, we could not find what you were looking for.");
    };

    xhr.send(null);
  };
  displayItems();

  document.getElementById("sort-items").addEventListener("change", function(event) {
    if (event.target.value === "price-low") {
     sortItems("price-low");
     displayItems();
   };
    if (event.target.value === "price-high") {
      sortItems("price-high");
      displayItems();
    };
    if (event.target.value === "name-asc") {
      sortItems("name-asc");
      displayItems();
    };
    if (event.target.value === "name-desc") {
      sortItems("name-desc");
      displayItems();
    };
    if (event.target.value === "initial-sort") {
      sortItems("initial-sort");
      displayItems();
    };
  });


  function itemsCount() {
    var request = {
      url: "https://furniture-inc.firebaseio.com/.json",
      method: "GET",
      callbackFunction: function(data) {
        var parsedString = JSON.parse(data);
        var numberItems = document.querySelector("#numberItems");
        numberItems.innerHTML = parsedString.length;
      },
      data: null
    };
    requestXHR(request);
  };
  itemsCount();

});
