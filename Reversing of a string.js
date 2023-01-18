// Reversing of a string 
function reverse_string(str)
{
    var String_Reverse = " ";
    for (let y = str.length - 1; y >= 0; y--)
    {
        String_Reverse += str[y];
    }
    return String_Reverse;
}

// Input
const string = prompt('Enter a string : ');
// Output
const result = reverse_string(string);
console.log(result);
