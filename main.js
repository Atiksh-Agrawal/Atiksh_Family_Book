

var reasontext=["Sharad Agrawal",
"Deepti Agrawal",
"Atiksh Agrawal",
"Aryahi Agrawal"];

var images=["father.jpg","mom.png","brother.jpg","sister.jpg"];

var i=0;

function Changethings(){
document.getElementById("REASONS").innerHTML = reasontext[i];

  document.getElementById("ALBUM").src = images[i];

 [i++]; 
}