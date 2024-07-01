// My solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [nums];

    function swapper(arr, pos1, pos2) {
        arr2 = [...arr];
        let curNum = arr2[pos1];
        arr2[pos1] = arr2[pos2];
        arr2[pos2] = curNum;
        return arr2;
    };
    let lefti;
    let righti = 1;
    let ansHolder;

    while (righti < nums.length) {
        ansHolder = [...ans];
        for (var i = 0; i < ansHolder.length; i++){
            lefti = 0;
            while (lefti < righti) {
                ans.push(swapper(ansHolder[i], lefti, righti));
                lefti++;
            };
        };
        righti++;
    };

    return ans;

};




// Correct solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    const backTrack = (numberArray, path) => {
        if(numberArray.length === 0){
            result.push(path);
            return;
        }
        for(let i=0; i<numberArray.length; i++){
          backTrack([...numberArray.slice(0,i), ...numberArray.slice(i+1)], [...path, numberArray[i]]);
        }
    }   
    backTrack(nums, []);
    return result;
};
// First cycle cuts off index 0 and adds it to the path. Once the array is empty it returns back to the last recursion where it does i++ which also breaks the loop returning it to the recursion before that where it does i++ (from 0 to 1) which allows it to cut off index 1 before looping.

// With an input of [1,2,3] this results in an output of:
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]