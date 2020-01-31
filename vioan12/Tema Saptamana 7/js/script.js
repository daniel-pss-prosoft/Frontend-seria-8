
//1. Modificati un paragraf astfel incat sa aiba alt font decat cel standard si sa fie subliniat
function firstExercise(){
    paragraphChangeFontAndUnderline("exercitiul1","Comic Sans MS");
}
function paragraphChangeFontAndUnderline(paragraphId,font){
    paragraph = document.getElementById(paragraphId);
    paragraph.style.fontFamily = font;
    paragraph.style.textDecoration = "underline";
} 

//2. Modificati un element de tip SELECT:
//a. Adaugati o optiune noua
//b. Stergeti una dintre optiunile originale (folositi ELEMENT.remove() )
//c. Schimbati optiunea curent selectata
function secondExercise(){
    modifyFirstForm("exercitiul2","Transgender");
}
function modifyFirstForm(className,newOption){
    var firstFormElement = document.querySelector("." + className).firstElementChild;
    formElementAddNewElement(firstFormElement,newOption);
    formElementRemoveFirstOption(firstFormElement);
    formElementRemoveSelectedOption(firstFormElement);
}
function formElementAddNewElement(formElement, newOption){
    //Div
    var newElementDiv =  document.createElement("div");
    newElementDiv.classList.add(newOption.toLowerCase());
    formElement.appendChild(newElementDiv);
    
    //Radio box
    var newElementInput = document.createElement("input");
    newElementInput.innerText = " " + newOption;
    newElementInput.id = "radio-" + newOption.toLowerCase();
    newElementInput.type = "radio";
    newElementInput.name = "gender";
    newElementInput.value = newOption.toLowerCase();
    newElementDiv.appendChild(newElementInput);
    
    //Label
    var newElementLabel = document.createElement("label");
    newElementLabel.innerText = " " + newOption;
    newElementLabel.htmlFor = "radio-" + newOption.toLowerCase();
    newElementDiv.appendChild(newElementLabel);    
}
function formElementRemoveFirstOption(formElement){
    formElement.firstElementChild.remove();
}
function formElementRemoveSelectedOption(formElement){
    for(element of formElement.children){
        if(element.firstElementChild.checked){
            element.remove();
        }
    }
}

//3. Selectati un element oarecare. Printati un mesaj in consola care sa enumere urmatoarele atribute:
//a. Target
//b. Id
//c. A doua clasa
//d. href
function thirdExercise(){
    var element = document.querySelector("." + "exercitiul3");
    consoleOutput(element.getAttribute("target"));
    consoleOutput(element.getAttribute("id"));
    if(element.classList.length > 1){
        consoleOutput(element.classList[1]);
    }
    consoleOutput(element.getAttribute("href"));
}
function consoleOutput(text){
    console.log(text);
}

//4. Scrieti un program care selecteaza doar formulare ce contin doar input-uri de tip text
//a. Printati in consola valoarea primului input.
//b. Modificati valoarea primului input
//c. Printati in consola valoarea ultimului input
//d. Modificati valoarea ultimului input astfel incat sa devina valoarea initiala a primului input
function fourthExercise(){
    var formsElement = document.querySelector("." + "exercitiul4");
    var isSpecialForm = true;
    var specialForm = null;
    for(form of formsElement.children){
        if(form.nodeName.toLowerCase() === "form"){
            isSpecialForm = true;
            for(div of form.children){
                if(div.nodeName.toLowerCase() === "div"){
                    for(element of div.children){
                        if(element.nodeName.toLowerCase() != "input" &&
                            element.getAttribute("type") != "text"){
                                isSpecialForm = false;
                            }
                    }
                }
            }
            if(isSpecialForm == true){
                specialForm = form;
            }
        }
    }
    if(specialForm != null){
        var divTextBoxes = specialForm.querySelectorAll("div");
        var firstInput = divTextBoxes[0].firstElementChild;
        var firstInputValue = firstInput.value;
        consoleOutput(firstInput);
        firstInput.value = "TTT";
        consoleOutput(divTextBoxes[divTextBoxes.length - 1].firstElementChild);
        divTextBoxes[divTextBoxes.length - 1].firstElementChild.value = firstInputValue;
    }
}

//5. Scrieti un program care sa calculeze volumul unei sfere. Programul trebuie sa citeasca din DOM valoarea razei sferei si sa actualizeze DOM-ul cu rezultatul.
document.querySelector(".calculate").firstElementChild.addEventListener("click",() =>{
    textboxRadius = document.querySelector("#input-radius");
    if(isNaN(parseFloat(textboxRadius.value))){
        alert("Radius must be number!");
    }else{
        document.querySelector("#input-volume").value = (4 * Math.PI * Math.pow(parseFloat(textboxRadius.value), 3)) / 3;
    }
});

//6. Scrieti un program care sa aplice stilizare CSS pe anumite cuvinte dintr-o propozitie, atunci cand se face MOUSE HOVER pe un ELEMENT TINTA.
//a. Aveti libertatea de a folosi orice propozitie, din care trebuie sa alegeti minim 3 cuvinte. 
//b. Exemplu:
    //i. Am creat o propozitie din care am ales 10 cuvinte
    //ii. Le-am marcat cu rosu pentru a vi le putea arata. In codul vostru, nu e obligatoriu ca ceea ce ati ales sa aiba culoarea rosie
    //iii. Pot fi alese cuvinte adiacente, insa trebuie sa le stilizam separat
    //iv. Propozitie:Avem aceasta propozitie care descrie ce se va intampla atunci cand facem hover pe un element ANCHOR din aceasta pagina frumoasa.
//c. ELEMENT TINTA: Creati un element de orice fel
//d. La MOUSE HOVER pe ELEMENT TINTA, aplicati unul sau mai multe stiluri CSS pe cuvintele selectate din propozitia voastra
    //i. Exemplu stilizare la hover:
//e. La iesirea mouse-ului de pe ELEMENT TINTA, propozitia revine la starea initiala
function sixthExerciseMouseIn(){
    spans = document.querySelectorAll(".mouseOut");
    spans.forEach(element => {
        element.classList.remove("mouseOut");
        element.classList.add("mouseIn")
    });
}
function sixthExerciseMouseOut(){
    spans = document.querySelectorAll(".mouseIn");
    spans.forEach(element => {
        element.classList.remove("mouseIn");
        element.classList.add("mouseOut")
    });
}

//7. Scrieti un program care creasca font-size cu 1 pixel al unui anumit element (spre exemplu un paragraf), atunci cand se face MOUSE HOVER pe un ELEMENT TINTA, dar nu pe copiii acelui element.
//a. ELEMENT TINTA: Creati un element de orice fel, care sa aiba unul sau mai multe elemente in interiorul sau
    //i. ELEMENT TINTA trebuie sa aiba o dimensiune mare decat copilul sau. Folositi CSS pentru asta, daca e nevoie.
    //ii. Acest lucru este necesar pentru a fi posibil sa facem hover atat pe ELEMENT TINTA, cat si pe copiii sai
    //iii. Daca ELEMENT TINTA are fix dimensiunea copiiilor, nu vom putea face hover doar pe el
//b. La MOUSE HOVER pe ELEMENT TINTA, dar nu pe copiii sai, cresteti font-size al unui anumit paragraf cu 1 pixel
//c. La iesirea mouse-ului de pe ELEMENT TINTA, paragraful isi mentine font-size-ul aplicat anterior
function seventhExerciseMouseInClass(){
    paragraph = document.querySelector("#paragraf72");
    realFontSize = window.getComputedStyle(paragraph).fontSize;
    paragraph.style.fontSize = (parseInt(realFontSize) + 1) + "px";
}
function seventhExerciseMouseOutClass(){
    paragraph = document.querySelector("#paragraf72");
    realFontSize = window.getComputedStyle(paragraph).fontSize;
    paragraph.style.fontSize = (parseInt(realFontSize) - 1) + "px";
}

//8. Identic cu exercitiul 7, insa font-size creste si atunci cand intram pe copiii ELEMENTULUI TINTA
//a. Pentru acest exercitiu cresteti font-size al unui alt element decat cel folosit la exercitiul 7
function eighthExerciseMouseInClass(){
    paragraph = document.querySelector("#paragraf81");
    realFontSize = window.getComputedStyle(paragraph).fontSize;
    paragraph.style.fontSize = (parseInt(realFontSize) + 1) + "px";
}
function eighthExerciseMouseOutClass(){
    paragraph = document.querySelector("#paragraf81");
    realFontSize = window.getComputedStyle(paragraph).fontSize;
    paragraph.style.fontSize = (parseInt(realFontSize) - 1) + "px";
}
function eighthExerciseMouseInParagraph(){
    paragraph = document.querySelector("#paragraf81");
    realFontSize = window.getComputedStyle(paragraph).fontSize;
    paragraph.style.fontSize = (parseInt(realFontSize) + 1) + "px";
}
function eighthExerciseMouseOutParagraph(){
    paragraph = document.querySelector("#paragraf81");
    realFontSize = window.getComputedStyle(paragraph).fontSize;
    paragraph.style.fontSize = (parseInt(realFontSize) - 1) + "px";
}

//9. Creati un program JavaScript care sa afiseze/ascunda un element la click pe un alt element
//a. Creati doua elemente oarecare. Spre exemplu: un Paragraf si un Buton
//b. Un element va fi ELEMENT-TINTA si un element va fi BUTON-DE-APASAT
//c. ELEMENT-TINTA are stare initiala ascunsa (nu e vizibila in browser)
//d. La click pe BUTON-DE-APASAT:
    //i. daca ELEMENT-TINTA e ascuns, se afiseaza
    //ii. daca ELEMENT-TINTA e afisat, se ascunde
document.querySelector(".button91").firstElementChild.addEventListener("click",() =>{
    textbox = document.querySelector("#paragraf9");
    if(textbox.style.visibility === "visible"){
        textbox.style.visibility = "hidden";
    }else{
        textbox.style.visibility = "visible";
    }
});

//10.  Identic cu exercitiul 9, insa acum avem un element DIV cu 4 grupuri de ELEMENT-TINTA si BUTON-DE-APASAT. 
//a. Fiecare ELEMENT-TINTA trebuie sa fie corelat cu un singur BUTON-DE-APASAT
ids = [101,102,103,104];
ids.forEach(element => {
    addEventListenerButtonClick(element);
});
function addEventListenerButtonClick(id){
    document.querySelector(".button" + id).firstElementChild.addEventListener("click",() =>{
        textbox = document.querySelector("#paragraf" + id);
        if(textbox.style.visibility === "visible"){
            textbox.style.visibility = "hidden";
        }else{
            textbox.style.visibility = "visible";
        }
    });
}
