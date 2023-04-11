var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const randomedNumber = shuffleArray(numbers).slice(0, 4).join('');
export { randomedNumber }