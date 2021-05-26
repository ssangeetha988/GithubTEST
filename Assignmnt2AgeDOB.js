var dob =prompt("Enter you dob in DD/MM/YYYY format");
var from = dob.split("/");
var birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
var cur = new Date();
var diff = cur - birthdateTimeStamp;

var currentAge = Math.floor(diff/31557600000);
// console.log("Your age is " + currentAge);
if((currentAge<44)&&(currentAge>18))
{
window.open("https://selfregistration.cowin.gov.in","_self");
}