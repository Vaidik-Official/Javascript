function number ()
{
let degree=document.getElementById("op").value;

if(degree>=0 && degree< 90){
   
   alert("This is First Quadrant");
}
else if(degree>=90 && number< 180)
    {
     alert("This is Second Quadrant");
}
else if(number>=180 && number<270){
    alert("This is Third Quadrant");
}
else if(number>=270 && number<360)
{
    alert("This is Fourth Quadrant");
}
else {
    return 'Invalid angle';
}
}
