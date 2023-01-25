// capitalizing all letters in a string
function case_change(text) 
{
    var string = "";
    
    for (x = 0; x < text.length; ++x) 
    {
        if (/[A-Z]/.test(text[x])) string = text[x].toLowerCase();
        else string += text[x].toUpperCase();
    }
    return string;
}

// Input
const string = prompt("Enter a string : ");
const result = case_change(string);
console.log(result);
