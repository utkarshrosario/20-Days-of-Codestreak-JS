// Cube numbers in given Range
function Cube_numbers(x,y)
{
    for(var a = x; a <= y; a++)
    {
        for(var b = 1; b * b * b <= a; b++)
        {
            if(b * b * b == a)
            {
                document.write(b * b * b + " ");
            }
        }
    }
}
// Range
let x = 1;
let y = 1000;
document.write("Cube numbers in range : ");
Cube_numbers(x,y);
