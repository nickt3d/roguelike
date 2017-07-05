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
}

function drawMap(){
	//draw all the map tiles
}

function drawFOW(){
	//draw thhe fog of war
}

function drawEntities(){
	//get entity list
	//draw all entities that are in the view
}

window.onload = function(){
	drawLoop();
};

