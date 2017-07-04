var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
var running = true;


//Loop
function drawLoop(){
    requestAnimationFrame(drawLoop);
    if(running){
    	draw();    
    	running = false;
    }
}

//Drawing
function draw(){
	// Clear canvas at the start of each draw
	c.clearRect(0,0,canvas.width,canvas.height);

    c.fillText("#", 10, 10);

}


window.onload = function(){
	drawLoop();
};

