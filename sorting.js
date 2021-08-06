// program to sort words in alphabetical order
function Sorting(sentence){
    const word = sentence.split(' ');
    word.sort();
    console.log('The sorted words are:');

    for (const element of word) {
        console.log(element);
    }
}
Sorting('elephant eats banana');