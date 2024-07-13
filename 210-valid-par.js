// improvements in comments

var isValid = function(s) {
    let left = ['(', '{', '['];
    let right = [')', '}', ']'];
    let stack = []
    for (let ch of s) {
        if (left.includes(ch)) {
            stack.push(ch);
        } else if (right.includes(ch) && stack[stack.length-1] == left[right.indexOf(ch)]) {
            stack.pop();
            // No need for two elses using dictionary
            // else if dict[pop] !== ch return false
        } else {
            return false;
        }
    }
    // return !stack.length
    if (stack.length != 0){
        return false;
    }
    return true;
};