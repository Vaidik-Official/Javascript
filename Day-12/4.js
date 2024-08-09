function countVowels(str) {
    // Define a set of vowels
    const vowels = 'aeiouAEIOU';
    // Initialize a counter
    let count = 0;

    // Iterate through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}