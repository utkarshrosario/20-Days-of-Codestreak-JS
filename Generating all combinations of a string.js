// Generating all combinations of a string
function combination_of_string (str)
{
    let string = new Array();
    for(var x = 0; x <= str.length; x++)
    {
        for(var y = x + 1; y <= str.length; y++)
        {
            string.push(str.slice(x, y));
        }
    }
    return string;
}
// Input
document.write(combination_of_string("codestreak"));
