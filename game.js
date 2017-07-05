var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
var running = true;

//Loop
function gameLoop(){
    requestAnimationFrame(drawLoop);
    if(running){
    	$.getscript("draw.js"),function(){
            draw();
        };
    	running = false;
    }
}

window.onload = function(){
	gameLoop();
};