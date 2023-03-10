// Simple Interest and Compound Interest
let p, r, t, SI, CI; 
// p = Principal amount, r = Rate of Interest, t = Time, SI = Simple Interest, CI = Compound Interest

// Values of p, r, t for calculating Simple Interest and Compound Interest
p = 1500;
r = 25;
t = 15;

// Formula for calculating Simple Interest 
SI = (p * r * t)/100;

// Formula for calculating Compound Interest
amount = p*Math.pow((1 +r/100),t );
CI = amount-p;

// Output
document.write("Simple Interest : " + SI);
document.write("Compound Interest : " + CI);
