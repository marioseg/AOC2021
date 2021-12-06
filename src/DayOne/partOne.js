import { main } from "../DayZero/index.js";

var counter = 0;

function logArrayElements(element, index, array) {
    
    if(array[index]> array[index-1]){
        counter++
    }
}


export const getResult = () => {


    const load = main();
    const loadFix = load.replace(/(\r\n|\n|\r)/gm, " ")
    const input = loadFix.split(" ");

    input.forEach(logArrayElements);

    return counter;
}