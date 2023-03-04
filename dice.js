var Random1 = Math.floor(Math.random()*6)+1;
var R1= "image/D" + Random1 + ".png";
var imge = document.querySelectorAll("img")[0];
imge.setAttribute("src",R1);
var Random2 = Math.floor(Math.random()*6)+1;
var imge1= document.querySelectorAll("img")[1];
imge1.setAttribute("src","image/D" + Random2 + ".png");
if(Random1>Random2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(Random1<Random2){
    
    document.querySelector("h1").innerHTML=" Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩Draw!! 🚩";

}