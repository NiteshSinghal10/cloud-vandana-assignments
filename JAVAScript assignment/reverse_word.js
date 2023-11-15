function reverseWords(str) {
    let wordsArray = str.split(' ');

    let reversedArray = wordsArray.map(word => reverseString(word));

    let reversedString = reversedArray.join(' ');

    return reversedString;
}

function reverseString(str) {
    //phele string split ki fir reverse ki and fir use dubara join kr ke return kre diya
    return str.split('').reverse().join('');
}

let original = "This is a sunny day";
let output = reverseWords(original);

console.log( original);
console.log(output);







