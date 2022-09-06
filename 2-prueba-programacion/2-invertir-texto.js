// Just in case specific language functions are not allowed, I did this exercise with 2 different ways

/**
 * 
 * @param {string} inputText 
 * @returns reversed string
 */

function reverseTextWithFunctions(inputText) {
    return inputText.split("").reverse().join("");
}

function reverseTextWithLoop(inputText) {
    let result = "";

    for(let i = inputText.length - 1; i >= 0; i--) {
        result+= inputText[i];
    }

    return result;
}


