function makeBold(){
  if ( document.getElementById("textInput").style.fontWeight == "normal") 
  {   document.getElementById("textInput").style.fontWeight="bold"}
  else {  document.getElementById("textInput").style.fontWeight="normal"}
}

function makefontStyle(){
if ( document.getElementById("textInput").style.fontStyle == "normal")
{   document.getElementById("textInput").style.fontStyle="Italic"}
else {  document.getElementById("textInput").style.fontStyle="normal"}


}


function makeUnderline(){
    if ( document.getElementById("textInput").style.textDecoration == "none")
    {   document.getElementById("textInput").style.textDecoration="underline"}
    else {  document.getElementById("textInput").style.textDecoration="none"}}

    
    function changeFontSize(fontSize){
document.getElementById("textInput").style.fontSize = fontSize.value + "px"
     }

     function changeFontFam(fontSize){
        document.getElementById("textInput").style.fontFamily = fontSize.value 
             
     }

  

