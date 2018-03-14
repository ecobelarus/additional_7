module.exports = function solveSudoku(matrix) {

    let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let candidates = [];
    let rightNumbers = [];

    for (var horisontal = 0; horisontal < 9; horisontal++) {

        for (var vertical = 0; vertical < 9; vertical++) {

            if (matrix[horisontal][vertical] === 0) {

                let horisontalOffset = Math.floor(horisontal / 3) * 3;
                let verticalOffset = Math.floor(vertical / 3) * 3;

                for (var i = 0; i < 9; i++) {
                    candidates.push(matrix[horisontalOffset + (i % 3)][verticalOffset + Math.floor(i / 3)]);
                    candidates.push(matrix[horisontal][i]);
                    candidates.push(matrix[i][vertical]);
                }
                
                for(var j = 0; j < possibleNumbers.length; j++) {
                    
                    if(candidates.some(number => number === possibleNumbers[j]) === false) {
                        rightNumbers.push(possibleNumbers[j]);
                    }
                }

                for (var k = 0; k < rightNumbers.length; k++) {
                    matrix[horisontal][vertical] = rightNumbers[k];
                    
                    if (solveSudoku(matrix)) {
                        return matrix;
                    }
                }

                matrix[horisontal][vertical] = 0;
                return false;
            }
        }
    }

    return matrix;
}