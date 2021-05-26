function checkPalindrome(str) {

    for (let i = 0; i <( (string.length) / 2); i++) {

        if (string[i] !== string[(string.length) - 1 - i]) {
            return 'Entered string is not a palindrome';
        }
    }
    return 'Entered string is a palindrome';
}


const string = prompt('Enter a string: ');

const value = checkPalindrome(string);

console.log(value);
