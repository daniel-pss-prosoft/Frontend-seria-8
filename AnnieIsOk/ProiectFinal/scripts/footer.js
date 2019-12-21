"use strict"
function addYear () {
    var companyInfo = document.getElementById('companyInfo');
    companyInfo.appendChild(document.createTextNode(new Date().getFullYear()));
}
addYear ();