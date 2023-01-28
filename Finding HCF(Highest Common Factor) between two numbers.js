// Finding HCF(Highest Common Factor) between two numbers
let HCF;
// Putting two numbers for finding HCF
const a = prompt("First number : ");
const b = prompt("Second number : ");

for (var x = 0; x < a; x++) 
{
    for (var x = 0; x < b; x++)
    {
        if( a%x === 0 && b%x === 0)
        {
            HCF = x;
        }
    }
}
// Result
console.log(`HCF of ${a} and ${b} is ${HCF}`);
