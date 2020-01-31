
function compareIsEqual(firstValue, secondValue){
    var isEqual;
    if(firstValue == secondValue){
        isEqual = true;
    }else{
        isEqual = false;
    }
    return isEqual;
}

function compare(firstValue, secondValue){
    var matchId = 0;
    if(firstValue < secondValue){
        matchId = -1;
    }else if(firstValue > secondValue){
        matchId = 1;
    }
    return matchId;
}

function maximum(firstValue, secondValue){
    var max;
    if(firstValue > secondValue){
        max = firstValue;
    }else{
        max = secondValue;
    }
    return max;
}

function minimum(firstValue, secondValue){
    var min;
    if(firstValue < secondValue){
        min = firstValue;
    }else{
        min = secondValue;
    }
    return min;
}

function sumFirstNaturalNumbers(maximumRange){
    if(maximumRange >= 0){
        var sum = 0;
        for(var index = 1 ;index <= maximumRange; ++index){
            sum += index;
        }
        return sum;
    }else{
        throw new Error("maximumRange must be positive");
    }
}

function isPrime(number){
    if(number>=0){
        if(number==1 || number==0){
            return false;
        }
        for(var index = 2; index <= Math.sqrt(number); ++index){
            if(number % index == 0){
                return false;
            }
        }
        return true;
    }else{
        throw new Error("number must be positive");
    }
}

//O functie care intoarce suma primelor N numere prime, incepand de la 0
function sumPrimeNumbers(primeNumbersMaxCount){
    if(primeNumbersMaxCount>=0){
        var sum = 0, primeNumbersCount = 0, currentNumber = 0;
        while(primeNumbersCount < primeNumbersMaxCount){
            if(isPrime(currentNumber) == true){
                sum += currentNumber;
                ++primeNumbersCount;
            }
            ++currentNumber;
        }
        return sum;
    }else{
        throw new Error("primeNumbersMaxCount must be positive");
    }
}

//Calculeaza produsul primelor N numere impare pozitive
function productPositiveOddNumbers(oddNumbersMaxCount){
    if(oddNumbersMaxCount >= 0){
        var product = 1, oddNumbersCount = 0, currentNumber = 1;
        while(oddNumbersCount < oddNumbersMaxCount){
            if(currentNumber % 2 == 1){
                product *= currentNumber;
                ++oddNumbersCount;
            }
            ++currentNumber;
        }
        return oddNumbersMaxCount == 0 ?  0 : product;
    }else{
        throw new Error("oddNumbersMaxCount must be positive");
    }
}

function factorial(number){
    if(number>0){
        var product = 1;
        for(var index=1;index<=number;++index){
            product*=index;
        }
        return product;
    }else if(number==0){
        return 1;
    }else{
        throw new Error("number must be positive");
    }
}

function greatestCommonDivisor(firstNumber,secondNumber){
    if(secondNumber != 0 && firstNumber != 0){
        var temporary;
        if(firstNumber < secondNumber)
	    {
            temporary = firstNumber;
            firstNumber = secondNumber;
            secondNumber = temporary;
	    }
        while(secondNumber!=0){
            temporary = firstNumber % secondNumber;
            firstNumber = secondNumber;
            secondNumber = temporary;
        }
        return firstNumber;
    }else{
        throw new Error("firstNumber and secondNumber must not be equal to 0");
    }
}

function leastCommonMultiple(firstNumber,secondNumber){
    if(secondNumber != 0 && firstNumber != 0){
        return (firstNumber * secondNumber)/greatestCommonDivisor(firstNumber,secondNumber);
    }else{
        throw new Error("firstNumber and secondNumber must not be equal to 0");
    }
}

//Verifica daca un numar este palindrom
function isPalindrome(number){
    var reversedNumber = 0, temporary = number;
    while(temporary!=0){
        reversedNumber = reversedNumber * 10 + temporary % 10;
        temporary/=10;
        temporary=Math.trunc(temporary);
    }
    if(number==reversedNumber){
        return true;
    }
    return false;
}