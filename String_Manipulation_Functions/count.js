// Count Characters: Create a function that counts the number of characters in a string.
function countChar(str){
    let count = 0;
    for (let i=0; i<str.length; i++){
        count++;
    }
    return count
}

console.log(countChar("This is a test string"))