
function noOfVowels(string) {
    var listOfVowels = 'aAeEiIoOuU';
    var vowelsCount = 0;
    var c=0; var e=0; var z=0; var p=0; var u=0;
    for(var i = 0; i < string.length ; i++) {
       if (listOfVowels.indexOf(string[i]) !== -1) {
          vowelsCount += 1;
           if((string[i]=='a') || (string[i]=='A'))
           {
          c = c+1;
           }
          if((string[i]=='e') || (string[i]=='E')){
         e=e+1;
         
          }
          if((string[i]=='I') || (string[i]=='i')){
         z=z+1;
         
          }
          if((string[i]=='o') || (string[i]=='O')){
         p=p+1;
         
          }
          if((string[i]=='U') || (string[i]=='u')){
          u = u+1;
         
      }
          }
    }
 console.log(vowelsCount);
 console.log("A : " + c);
 console.log("E : " + e);
 console.log("I : " + z);
 console.log("O : " + p);
 console.log("U : " + u);
 }
noOfVowels("Hey This is Skillsanta JS Training”");



