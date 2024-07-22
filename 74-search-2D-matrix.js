var searchMatrix = function(matrix, target) {
    let colLeft = 0;
    let colRight = matrix[0].length-1;
    let rowLeft  = 0;
    let rowRight = matrix.length-1;
    while (rowLeft <= rowRight) {
        let mid = Math.floor((rowRight+rowLeft)/2);
        if (target < matrix[mid][colLeft]){
            console.log("target less than mid");
            rowRight = mid - 1;
        } else if (target > matrix[mid][colRight]){
            console.log("target greater than mid");
            rowLeft = mid + 1;
        } else {
            while (colLeft <= colRight) {
                let colMid = Math.floor((colRight+colLeft)/2);
                if (target === matrix[mid][colMid]){
                    return true;
                } else if (target < matrix[mid][colMid]) {
                    colRight = colMid-1;
                } else {
                    colLeft = colMid + 1;
                }
            }
            return false;
        }
    }
    return false;
}
console.log(searchMatrix([[1,1]], 2));