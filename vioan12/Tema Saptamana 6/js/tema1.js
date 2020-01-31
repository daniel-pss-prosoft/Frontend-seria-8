//1. Write a JavaScript program to sort a numeric array and a string array.
function sortArray(array){
    array.sort((firstElement, secondElement) => {
        if(typeof(firstElement) != "string" && typeof(secondElement) != "string"){
            if(firstElement < secondElement){
                return -1;
            }else if(firstElement > secondElement){
                return 1;
            }else{
                return 0;
            }
        }
        if(typeof(firstElement) == "string" && typeof(secondElement) == "string"){
            return firstElement.localeCompare(secondElement);
        }
    });
    return array;
}

//2. Write a JavaScript program to sum values of an array.
function sumArray(array){
    var sum = 0;
    array.forEach(element => {
        if(typeof(element) == "number"){
            sum+=element;
        }
    });
    return sum;
}

//3. Write a JavaScript program to calculate the average value of array elements.
function averageValueArray(array){
    var sum = 0, elementsCount = 0;
    array.forEach(element => {
        if(typeof(element) == "number"){
            sum+=element;
            ++elementsCount;
        }
    });
    if(elementsCount > 0){
        return sum/elementsCount;
    }else{
        throw new Error("there are no numbers in the array");
    }
}

//4. Write a JavaScript program to test if an array contains a specific value.
function containsValueArray(array,valueToFind){
    return valueToFind === array.find((element) => { return element === valueToFind; }) ? true : false;
}

//5. Write a JavaScript program to remove a specific element from an array.
function removeElementArray(array,elementToRemove){
    var index = array.findIndex((element) => {
        return element === elementToRemove;
    });
    array.splice(index,1);
    return array;
}

//6. Write a JavaScript program to insert an element (specific position) into an array.
function insertElementArray(array,elementToInsert,specificPosition){
    if(specificPosition >=0){
        array.splice(specificPosition, 0, elementToInsert);
    }else{
        throw new Error("specificPosition must be positive");
    }
    return array;
}

//7. Write a JavaScript program to find the maximum and minimum value of an array.
function maximumAndMinimumValueArray(array){
    if(array.length > 0){
        var minimum, maximum;
        minimum = maximum = array[0];
        for(index = 1; index < array.length; index++){
            if(array[index] > maximum){
                maximum = array[index];
            }
            if(array[index] < minimum){
                minimum = array[index];
            }
        }
        return maximumAndMinimum = {
            Minimum : minimum,
            Maximum : maximum
        };
    }else{
        throw new Error("array must have at least one element")
    }
}

//8. Write a JavaScript program to reverse an array of integer values.
function reverseArray(array){
    array.reverse();
    return array;
}

//9. Write a JavaScript program to get the length of a given string.
function lengthString(givenString){
    return givenString.toString().length;
}

//10. Write a JavaScript program to replace all the 'd' characters with 'f' characters.
function replaceCharacters(givenString){
    givenString = givenString.replace(/[d]/g,'f');
    return givenString;
}

//11. Write a JavaScript program to convert all the characters in a string to uppercase.
function uppercaseString(givenString){
    givenString = givenString.toString().toUpperCase();
    return givenString;
}

//12. Write a JavaScript program to trim any leading or trailing whitespace from a given string.
function trimWhitespaceString(givenString){
    givenString = givenString.toString().trim();
    return givenString;
}

/*13. Write a JavaScript program to merge two given arrays of integers and create a new sorted array. Example: 
array1 = [4,2,1,3]
array2 = [2,8,7,5]
result = [1,2,2,3,4,5,7,8]
*/
function mergeTwoArrays(firstArray,secondArray){
    return firstArray.concat(secondArray).sort((firstElement, secondElement) => {
        if(typeof(firstElement) != "string" && typeof(secondElement) != "string"){
            if(firstElement < secondElement){
                return -1;
            }else if(firstElement > secondElement){
                return 1;
            }else{
                return 0;
            }
        }
    });
}