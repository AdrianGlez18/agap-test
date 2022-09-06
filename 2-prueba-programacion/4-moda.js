/**
 * 
 * @param {number[]} arr 
 * @returns moda
 */
function getModa(arr) {
    let aux = {};
    let result = 0;
    let max = 0;

    for (const element of arr) {
        aux[element] = aux[element] ? aux[element] + 1 : 1;
    }

    for (let [key, element] of Object.entries(aux)) {
        if (element > max) {
            max = element;
            result = key;
        }
    }

    return result;
}