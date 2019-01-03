/**
 * This is helper code for your web app. You should not change anything here.
 * 
 * @author Sam Scott, Sheridan College, 2013
 */

//Global Variable for the canvas drawing surface
var canvas; 

/*
 * Called when the index.html document has loaded. 
 * Sets up global variables and calls the user's init method
 * @param (event) event Unused
 */
function initHelper(event) {
	// Get the canvas drawing surface
	canvas = document.getElementById("canvas").getContext("2d");

	// canvas extensions
	canvas.strokeArc = function(x, y, radius, start, end) {
		this.beginPath();
		this.arc(x,y,radius,-start/180*Math.PI,-end/180*Math.PI,true);
		this.stroke();
	};

	canvas.fillArc = function(x, y, radius, start, end) {
		this.beginPath();
		this.arc(x,y,radius,-start/180*Math.PI,-end/180*Math.PI,true);
		this.lineTo(x,y);
		this.fill();
	};

	canvas.strokeLine = function(x,y,x2,y2) { 
		this.beginPath(); 
		this.moveTo(x,y); 
		this.lineTo(x2,y2); 
		this.stroke(); 
	};
	
	// Call web app init method
	init();
}

/*
 * A debugging utility method for the web app designer. Messages
 * will be displayed at the bottom of the page.
 * @param (string) message The message to display
 */
function debugOut(message) {
	document.getElementById("debug").innerHTML += message+"<br>";
}
/*
 * Gets the key that was pressed and calls the app's keyDown function.
 * @param (KeyboardEvent) event
 */
function keyDownHelper(event) {
	keyDown(event.keyCode, String.fromCharCode(event.keyCode));
}
/*
 * Gets the key that was pressed and calls the app's keyUp function.
 * @param (KeyboardEvent) event
 */
function keyUpHelper(event) {
	keyUp(event.keyCode, String.fromCharCode(event.keyCode));
}
/*
 * Gets the key that was pressed and calls the app's keyPress function.
 * @param (KeyboardEvent) event
 */
function keyPressHelper(event) {
	keyPress(event.charCode, String.fromCharCode(event.charCode));
}
/*
 * Gets the location and button and calls the app's mouseDown function.
 * @param (MouseEvent) event
 */
function onMouseDownHelper(event) {
	var x = event.clientX - canvas.canvas.offsetLeft + window.scrollX;
	var y = event.clientY - canvas.canvas.offsetTop + window.scrollY;
	mouseDown(x,y,event.button);
}
/*
 * Gets the location and button and calls the app's mouseUp function.
 * @param (MouseEvent) event
 */
function onMouseUpHelper(event) {
	var x = event.clientX - canvas.canvas.offsetLeft + window.scrollX;
	var y = event.clientY - canvas.canvas.offsetTop + window.scrollY;
	mouseUp(x,y,event.button);
}
/*
 * Gets the location of a move and calls the app's mouseMove function.
 * @param (MouseEvent) event
 */
function onMouseMoveHelper(event) {
	var x = event.clientX - canvas.canvas.offsetLeft + window.scrollX;
	var y = event.clientY - canvas.canvas.offsetTop + window.scrollY;
	mouseMove(x,y);
}
/*
 * Gets the location and calls the app's mouseOver function.
 * @param (MouseEvent) event
 */
function onMouseOverHelper(event) {
	var x = event.clientX - canvas.canvas.offsetLeft + window.scrollX;
	var y = event.clientY - canvas.canvas.offsetTop + window.scrollY;
	mouseOver(x,y);
}
/*
 * Gets the location and calls the app's mouseOut function.
 * @param (MouseEvent) event
 */
function onMouseOutHelper(event) {
	var x = event.clientX - canvas.canvas.offsetLeft + window.scrollX;
	var y = event.clientY - canvas.canvas.offsetTop + window.scrollY;
	mouseOut(x,y);
}
/*
 * Gets the button number and calls the app's button1Click function.
 * @param (MouseEvent) event
 */
function button1ClickHelper(event) {
	button1Click(event.button);
}
/*
 * Gets the button number and calls the app's button2Click function.
 * @param (MouseEvent) event
 */
function button2ClickHelper(event) {
	button2Click(event.button);
}
/*
 * Customize title bar and heading
 * @param (string) title
 */
function setTitle(title) {
	document.getElementsByTagName("title")[0].innerHTML=title;
	document.getElementById("title").innerHTML=title;
}
/*
 * Customize author info
 * @param (string) byLine
 */
function setByLine(byLine) {
	document.getElementById("author").innerHTML=byLine;
}
/*
 * Customize button 1. If param is "", button disappears.
 * @param (string) value
 */
function setButton1(value) {
	var button = document.getElementById("button1");

	if (value == "")
		button.style["display"]="none";
	else {
		button.value=value;
		button.style["display"]="inline";
	}
}
/*
 * Customize button 2. If param is "", button disappears.
 * @param (string) value
 */
function setButton2(value) {
	var button = document.getElementById("button2");

	if (value == "")
		button.style["display"]="none";
	else {
		button.value=value;
		button.style["display"]="inline";
	}
}
/* Customize canvas size
 * @param (number) width
 * @param (number) height
 */
function setCanvasSize(width, height) {
	var c = document.getElementById("canvas");
	c.width = width;
	c.height = height;
}

//Keeps track of the current timer
var timer = -1;

/*
 * Sets up a timer for the user.
 * @param (number)interval 
 */
function setTimer(interval) {
	if (interval > 0)
		if (timer == -1)
			timer = setInterval(clockTickEvent,interval);
		else
			alert("ERROR: Attempt to set two timers.");
	else {
		clearInterval(timer);
		timer = -1;
	}
}