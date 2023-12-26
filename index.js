function isPalindrome(word) {
  let palindrome = false;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === word.charAt(word.length - 1 - i)) {
      palindrome = true
    }
    else break;
  }
  return palindrome;
}

/* 
 Create function "isPalindrome" that takes in a word and outputs a Boolean
 Initialize boolean variable to false
 Words will be different lengths, so cannot hard code numbers
 Use for loop and set length of loop to be less than word length
 Inside for loop, compare character at i to character at word length -1 - i
 If equal, set boolean to true, else break from for loop
 Return boolean
*/

/*
My code is optimized because I do not use many if statements to account
for different length words - I instead use one for loop that uses
the length of the word to determine how many characters it needs to
compare. The function name and variable name are descriptive so that
someone else looking at the code would understand their function.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: false");
  console.log("=>", isPalindrome("baba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("babababab"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
