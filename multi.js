const salary=5200;
const age = 20;
const isfree =true;

if(salary >5100 && age>21){
    console.log("ok");
}
else{
    console.log("not yes");
}
// or 
if(salary >5100 || age>21){
    console.log("ok");
}
else{
    console.log("not yes");
}
// complex
if((salary >5100 && age>21) || isfree == true){
    console.log("ook");
}
else{
    console.log("not yes");
}