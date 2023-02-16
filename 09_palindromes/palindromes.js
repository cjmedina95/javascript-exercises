// Regex filter from: https://stackoverflow.com/questions/9364400/remove-not-alphanumeric-characters-from-string
// Strips special characters and converts characters to lower case, then loops through half the word's length,
// comparing the starting and ending characters. If any characters don't match, returns false.
const palindromes = function (palindrome) {
    palindrome = palindrome.replace(/[^0-9a-z]/gi, "").toLowerCase();

    for (let i = 0; i < palindrome.length / 2; i++) {
        if (palindrome[i] != palindrome[palindrome.length - i - 1]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
