// Square numbers in given range
function Square_numbers(m,n)
{
    for(let x = m; x <= n; x++)
    {
        for(let y = 1; y * y <= x; y++)
        {
            if(y * y === x)
            {
                document.write(y * y + " ");
            }
        }
    }
}
// Range
let m = 1;
let n = 50;
document.write("Square numbers in range : ");
Square_numbers(m,n);
