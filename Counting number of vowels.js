//  Counting number of vowels 
function count_vowel(str1)
{
    var list_of_vowels = 'aeiou';
    var count = 0;
    
    for(let v = 0; v <= str1.length; v++)
    {
        if (list_of_vowels.indexOf(str1[v]) !== -1)
        {
            count += 1;
        }
    }
    return count;
}
// Input
const string = prompt('Enter a string : ');

const result = count_vowel(string);

console.log(result);
