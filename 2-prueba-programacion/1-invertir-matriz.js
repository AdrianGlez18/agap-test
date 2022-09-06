/**
 * 
 * @param {*} matrix 
 * 
 * Example matrix:
 * [ [3,4,5],
 *   [9,8,7],
 *   [2,5,7] ]
 */

function reverseMatrix(matrix) {
    let result = [];
    
    //Check the matrix is not empty
    if(matrix.length === 0) return [];

    for(let i = 0; i < matrix[0].length; i++) {
        result[i] = [];
        for(let j = 0; j < matrix.length; j++) {
            result[i].push(matrix[j][i]);
        }
    }
    return result;
}

