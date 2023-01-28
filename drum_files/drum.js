var lengthofbutton= document.querySelectorAll(".drum").length;
for(var i=0;i<lengthofbutton;i++)
{
/*var letter=document.querySelector(".drum")[i].("keypress",function(){
    var classname=this.className;
    musicplay(classname);
    console.log(classname);
});*/
document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
    var classname=this.className;
 musicplay(classname);
});

function musicplay(letter){
 switch(letter){
    case 'w drum':
        var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case 'a drum':
        var audio= new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case 's drum':
        var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    case 'd drum':
        var audio= new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case 'j drum':
        var audio= new Audio("sounds/crash.mp3");
        audio.play();
        break;
    default:
            alert("not wroking");
            break;
 }
}
}



