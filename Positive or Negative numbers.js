// Positive or Negative numbers
function Positive_Negative()
{
    if (number > 0)
    {
        console.log("Positive");
    }
    else if (number == 0)
    {
        console.log("Number is zero");
    }
    else
    {
        console.log("Negative");
    }
}
// Entering the number to check whether it is positive or negative
const number = parseInt(prompt("Enter a number : "));
Positive_Negative("Result");
