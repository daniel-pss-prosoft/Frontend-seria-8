//Write a Java program to convert temperature from Fahrenheit to Celsius degree.
function toCelsiusDegree(fahrenheitDegree){
    var fahrenheitDegreeString = new String(fahrenheitDegree);
    var decimalPartSize = fahrenheitDegreeString.slice(fahrenheitDegreeString.indexOf('.')).length - 1;
    if(decimalPartSize <= 1){
        return parseFloat(fahrenheitDegree).toFixed(1)
            +" degree Fahrenheit is equal to "
            + parseFloat((fahrenheitDegree - 32) * 5/9).toFixed(1) + " in Celsius";
    }else{
        throw new Error("fahrenheitDegree maximum is tenths value after decimal point");
    }
}

//Write a JavaScript program that reads a number in inches, converts it to meters.
function toMeters(inches){
    var inchesString = new String(inches);
    var decimalPartSize = inchesString.slice(inchesString.indexOf('.')).length - 1;
    if(decimalPartSize <= 1){
        return parseFloat(inches).toFixed(1) +
            " inch is " +
            parseFloat(inches*0.0254).toFixed(1) + " meters";
    }else{
        throw new Error("inches maximum is tenths value after decimal point");
    }
}

function sumDigits(number){
    if(typeof(number) == "number"){
        number=parseInt(number);
        if(number>=0 && number<=1000){
            var sum=0;
            while(number!=0){
                sum+=number%10;
                number/=10;
                number=Math.floor(number);
            }
            return sum;
        }else{
            throw new Error("number must be greater than 0 and less than 1000");
        }
    }else{
        throw new Error("number must be an integer");
    }
}

function toYearsAndDays(minutes){
    if(typeof(minutes) == "number"){
        var years = minutes/525949.2;
        var yearsRounded = Math.floor(years);
        var days = ((years - yearsRounded)*525949.2)/1440;
        return minutes + " minutes is approximately "
        + yearsRounded +" years and "
        + Math.ceil(days)  +" days";
    }else{
        throw new Error("minutes must be an integer");
    }
}

//Write a JavaScript program that prints the current time in GMT.
function currentTimeInGmt(){
    var currentDateTime = new Date();
    return "Current time is " 
        + currentDateTime.getUTCHours()
        + ":"
        + currentDateTime.getUTCMinutes()
        + ":"
        + currentDateTime.getUTCSeconds();
}

function bodyMassIndex(weight,height){
    return 703 * (weight / Math.pow(height,2));
}

function problem7th(){
    var firstNumber;
    var secondNumber;
    do{
        firstNumber = prompt("Input 1st integer:");
    }while(isNaN(firstNumber));
    do{
        secondNumber = prompt("Input 2nd integer:");
    }while(isNaN(secondNumber));
    return "Sum of two integers: " + (parseInt(firstNumber)+parseInt(secondNumber)) 
        + "\nDifference of two integers: " + (firstNumber-secondNumber)
        + "\nProduct of two integers: " + (firstNumber*secondNumber)
        + "\nAverage of two integers: " + ((parseInt(firstNumber)+parseInt(secondNumber))/2)
        + "\nDistance of two integers: " + (firstNumber<secondNumber ? secondNumber-firstNumber : firstNumber-secondNumber)
        + "\nMax integer: " + (firstNumber>secondNumber ? firstNumber : secondNumber)
        + "\nMin integer: " + (firstNumber<secondNumber ? firstNumber : secondNumber);
}

function numberBreakIntoSequenceDigits(number){
    if(typeof(number) == "number"){
        var sequenceDigits = new String();
        while(number!=0){
            sequenceDigits += number%10 + " ";
            number/=10;
            number=Math.floor(number);
        }
        return sequenceDigits.split("").reverse().join("").slice(1,sequenceDigits.length);
    }else{
        throw new Error("number must be an integer");
    }
}

function problem9th(){
    return parseInt(-5) + parseInt(8) * 6
        + "\n" + ((parseInt(55)+parseInt(9)) % 9)
        + "\n" + (parseInt(20) + Math.ceil((parseInt(-3))*5 / 8))
        + "\n" + (parseInt(5) + parseInt(15) / 3 * 2 - 8 % 3);  
}

//Write a JavaScript program to check if a string starts with a specified word. 
function stringBeginWith(baseString,searchingString){
    return baseString.startsWith(searchingString);
}

function systemDateTime(){
    var dateTime = new Date();
    return dateTime;
}

function reverseString(string){
    return string.split("").reverse().join("");
}