let a= prompt("Enter the first number");
let b= prompt("Enter the second number");
let c= prompt("Enter the third number");
let largest;
if((a>b)&& (a>c))
{
largest = a;
console.log("Largest is " + largest);
}
else if(b>c)
{
largest = b;
console.log("Largest is " + largest);
}
else if((c>b)&& (c>a)){
largest=c;
console.log("Largest is " + largest);
}
else{
console.log("All are equal");
}
