let input = [3, 5, 1, 2, 7, 9, 6, 8, 4];

function linearSearch(target) {
    for (let i = 0; i < input.length; i++) {
        if(input[i] === target) {
            return target;
        }
    }
    return `${target} could not be found in the array`;
}

console.log(linearSearch(10));