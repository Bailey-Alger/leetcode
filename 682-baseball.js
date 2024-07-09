var calPoints = function(operations) {
    score = [];
    for (let op of operations) {
        switch(op) {
            case 'C':
                score.pop();
                break;
            case 'D':
                score.push(score[score.length-1]*2);
                break;
            case '+':
                score.push(parseInt(score[score.length-1])+parseInt(score[score.length-2]));
                break;
            default:
                score.push(parseInt(op));
                break;
        }
    }
    return score.reduce((a, b) => a+b, 0);
};
console.log(calPoints(["5","2","C","D","+"]));