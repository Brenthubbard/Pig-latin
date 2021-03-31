# Pig Latin Translator
#### By three really cool people

## Specs

### Passing
#### Describe: pigLatin(text)

<!-- UI Logic: 
Test: It receives a text string from a user.
Code: 
Expected Output:  -->

Test:  It splits the input text into an array of words.
Code: pigLatin("hello goodbye hat, chair, and sun!");
Expected Output: ["hello", "goodbye", "hat,", "chair,", "and", "sun!"]

### Not yet passing

Test: It ignores non-alphabetical characters since they can't be vowels or consonants.
Code:
Expected Output:

Test: It detects if the initial character of a string is a vowel or consonant.
Code:
Expected Output:


Test: It detects if the initial character of a string is a vowel or consonant regardless of capitalization.
Code:
Expected Output:


Test:  It treats "y" as a vowel unless it is the first letter of a word.
Code:
Expected Output:


Test:  It adds "-way" to the end of each word in the array that beings with a vowel.
Code:
Expected Output:

Test:  It detects the number of consecutive consonants at the beginning of each word 
Code:
Expected Output:

Test:  It "shifts" the consecutive consonants to the end of the string
Code:
Expected Output:

Test: It detects if the final consecutive consonant is a "q" followed by a "u"
Code:
Expected Output:

Test:  If that is true, then move the "u" vowel with the consecutive consonants
Code:
Expected Output:

Test: It concatenates the "ay" suffix to the end of the word 
Code:
Expected Output:



Test:  It detects if the first letter of a word is capitalized.
Code:
Expected Output:


Test:  It lowercase capital letters that are moved to the end of a word.
Code:
Expected Output:


Test:  If the above happened, it then capitalizes the new first letter in a word.
Code:
Expected Output:


Test: It will concatenate elements with spaces and format for user interface 
Code:
Expected Output:
