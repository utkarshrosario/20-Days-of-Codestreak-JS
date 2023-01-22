// Printing stars pattern
let n = 7;
let pattern = "";

for(var a = 0; a <= n; a++)
{
    for(var b = 0; b < n-a; b++)
    {
         pattern += "";
    }
    for(var c = 0; c < a; c++)
    {
        pattern += "*";
    }
        pattern += "\n";
}
// printing pattern
console.log(pattern);
