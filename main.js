canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
var mouseEvent="";
var last_position_x, last_position_y;

color="black";
width=2;
//mouse up block
canvas.addEventListener("mouseUp", my_mouseUp);

function my_mouseUp(e){
    console.log("up");
   mouseEvent="mouseUp"; 
}
//mouse leave block
canvas.addEventListener("mouseLeave", my_mouseLeave);

function my_mouseLeave(e){
    console.log("leave");
   mouseEvent="mouseLeave"; 
}
//mouse down block + to get color and width from user
canvas.addEventListener("mouseDown", my_mouseDown);

function my_mouseDown(e){
    console.log("down");
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
   mouseEvent="mouseDown"; 
}
//mouse move, mouse move + mouse down
canvas.addEventListener("mouseMove", my_mouseMove);

function my_mouseMove(e){

current_position_X=e.clientX-canvas.offsetLeft;
current_position_Y=e.clientY-canvas.offsetTop;

if (mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;

    console.log("last Position of x and y coordinates are "+ last_position_x +" and " + last_position_y);
    ctx.moveTo(last_position_x, last_position_y);

    console.log("Current Position of x and y coordinates are "+ current_position_X +" and " + current_position_Y);
    ctx.lineTo(current_position_X, current_position_Y);
    ctx.stroke();
}
   last_position_x-current_position_X;
   last_position_y-current_position_Y;
}