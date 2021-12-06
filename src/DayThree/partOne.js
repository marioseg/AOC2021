import { getDataDayThree } from "../DayZero/index.js";

const load = getDataDayThree();
const loadFix = load.replace(/(\r\n|\n|\r)/gm, " ");
const input = loadFix.split(" ");

var gamma = "";

var epsilon = "";

var oxg = [];

var oxgRating = 0;

var scrubberRating = 0;

function getNewArray(originalArray){
    const reversedArrays = [];

    for (let index = 0; index < 5; ++index) {
        
        const myArray= [];

        originalArray.forEach(element => {
            
            const newArray = [];
            const newElement = element[index]

            myArray.push(newElement)            

        });
        
        reversedArrays.push(myArray)
    }

    return reversedArrays;
}

function getGamma (element, index, array) {

    var counterZeros =0;
    var counterOnes =0;

    element.forEach(element => {

        if(parseInt(element)== 0){
            counterZeros++;
        }else{
            counterOnes++;
        }

    })

    if(counterZeros>counterOnes){
        gamma = gamma + 0
    }else{
        gamma = gamma + 1
    }
}

function getEpsilon (element, index, array) {

    var counterZeros =0;
    var counterOnes =0;

    element.forEach(element => {

        if(parseInt(element)== 0){
            counterZeros++;
        }else{
            counterOnes++;
        }

    })

    if(counterZeros>counterOnes){
        epsilon = epsilon + 1
    }else{
        epsilon = epsilon + 0
    }
}

function getOxygenRating (currentArray, position) {

    var nextPosition = position;

    if(position == 11){
        nextPosition = 0;
    }else{
        nextPosition++
    }

    var counterZeros =0;
    var counterOnes =0;

    var zerosArray = [];
    var onesArray = [];

    currentArray.forEach(element => {
        
        const iterable = Array.from(element);

        if(parseInt(iterable[position]) == 1){
            onesArray.push(element)
            counterOnes++;
        }

        if(parseInt(iterable[position]) == 0){
            zerosArray.push(element)
            counterZeros++;
        }


    })

    // console.log( "Ceros count:",  counterZeros, "Ones Count:", counterOnes)
    
    if( counterZeros == counterOnes){
        const rating = parseInt(parseInt(onesArray[0]),'2')
        oxgRating = rating
    }else if (counterZeros > counterOnes){
        getOxygenRating(zerosArray, nextPosition)
    }else{
        getOxygenRating(onesArray, nextPosition)
    }
}

function getScrubberRating (currentArray, position) {

    var nextPosition = position;

    if(position == 11){
        nextPosition = 0;
    }else{
        nextPosition++
    }

    var counterZeros =0;
    var counterOnes =0;

    var zerosArray = [];
    var onesArray = [];

    currentArray.forEach(element => {
        
        const iterable = Array.from(element);

        if(parseInt(iterable[position]) == 1){
            onesArray.push(element)
            counterOnes++;
        }

        if(parseInt(iterable[position]) == 0){
            zerosArray.push(element)
            counterZeros++;
        }


    })

    // console.log( "Ceros count:",  counterZeros, "Ones Count:", counterOnes)
    
    if( counterZeros == counterOnes){
        const rating = parseInt(parseInt(zerosArray[0]),'2')
        scrubberRating = rating;
    }else if (counterZeros > counterOnes){
        // console.log(onesArray)
        getScrubberRating(onesArray, nextPosition)
    }else{
        getScrubberRating(zerosArray, nextPosition)
    }
}

export const getResult = () => {

    const reversedArrays = getNewArray(input);
    reversedArrays.forEach(getGamma);
    const gammaValue = parseInt(parseInt(gamma), '2')
    reversedArrays.forEach(getEpsilon);
    const epsilonValue = parseInt(parseInt(epsilon),'2');
    const power = gammaValue * epsilonValue;
    getOxygenRating(input, 0);
    getScrubberRating(input,0);
    console.log("Oxygen Rating:", oxgRating, "Scrubber Rating:", scrubberRating)
    const lifeSupportRating = oxgRating * scrubberRating;
    console.log("Life Support Rating:", lifeSupportRating)
}


getResult()