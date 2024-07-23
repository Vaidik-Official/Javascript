function number ()
{
let number=document.getElementById("op").value;

if(number>=90){
   
    alert("Congratulations For Getting A Grade");
}
else if(number>=80 && number<=89){
   alert("You Got B Grade,Can do More better!!");
}
else if(number>=70 && number<=79){
    alert("You Got C Grade, Improvement needed!!");
}
else if(number>=60 && number<=69)
{
    alert("You Got D Grade,Work Hard!!");
}
else{

    alert("You are Fail");
}
}
