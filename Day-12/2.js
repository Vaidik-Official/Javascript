function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    // Reverse the array of words
    const reversedWords = words.reverse();
    // Join the reversed array back into a string
    const reversedStr = reversedWords.join(' ');
    return reversedStr;
}
