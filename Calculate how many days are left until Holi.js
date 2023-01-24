// Calculate how many days are left until Holi
today=new Date();
let Holi=new Date(today.getFullYear(), 2, 8);

if (today.getMonth()===2 && today.getDate()>8) 
{
Holi.setFullYear(Holi.getFullYear()+1); 
}  
// Result
const one_day=1000*60*60*24;
console.log(Math.ceil((Holi.getTime()-today.getTime())/(one_day))+ " days left until Holi!");
