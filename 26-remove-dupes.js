nums = [1,1,2];
let j = 1;
function removeDupes() {
        for ( let i = 1; i< nums.length; i++ ) {
            if (nums[i] != nums[i-1]) {
                nums[j] = nums[i];
                j++;
        }
    }
    return j;
};
console.log(removeDupes());