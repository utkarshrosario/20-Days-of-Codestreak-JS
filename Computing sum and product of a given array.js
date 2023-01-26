// computing sum and product of a given array
let arr = [5, 10, 15, 20, 25, 30, 35, 40],
    sum = 0,
    product = 1,
    j;

for (var  x = 0; x < arr.length; x += 1) 
{
    sum += arr[x];
    product *= arr[x];
}
// Sum of the array
console.log('Sum : '+sum );
// Product of the array
console.log( 'Product : '+product);
