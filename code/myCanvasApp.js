// *** YOUR GLOBAL VARIABLES AND FUNCTIONS HERE

//player positions & speed
var playerX = 310;
var playerY=300;
var playerSpeed = 5;

//props position
var shrubX=-10;
var shrubY=75;
var shrubSpeed= 100;
var treeX= -10;
var treeY= 75;
var wizardX= 325;
var wizardY= -150;
var ogreX=398;
var ogreY=-500;
var houseX=530;
var houseY=-30;
var counterspeedUp=0;
var tickCount=0;
var speedUpX=240;
var speedUpY=-50;
var skeletonX=225;
var skeletonY=-225;
var backroundX=0;
var backroundY=0;
var gameOver = false; 
var score = 0;
var finalScore;  
var mouseDownButton=false;
var playButtonX=225;
var playButtonY=260;
var MenuButtonX=180;
var MenuButtonY=350;
var health=100;
var previousScore=0;


//player current direction
var p1Left = false;
var p1Right = false;

//images
var player= new Image();
player.src = "images/knight.png";
var shrub= new Image();
shrub.src= "images/shrub-clipart-bushes-hi-png-1n.png";
var tree=new Image();
tree.src= "images/scary tree.png";
var wizard= new Image();	
wizard.src="images/dark wizard.png";
var ogre=new Image();
ogre.src="images/ogre.png";
var speedUp=new Image();
speedUp.src="images/speedup.png";
var house= new Image();
house.src="images/house.png";
var skeleton=new Image();
skeleton.src="images/skeleton.png";
var backround=new Image();
backround.src="images/road.png";
var startMenu=new Image();
startMenu.src="images/startMenu.png";


//sounds
var zap= new Audio("sounds/Zap.wav");
var select=new Audio("sounds/select.wav");
var impact=new Audio("sounds/impact.wav");
var theme=new Audio("sounds/theme.wav");

// *******************************************

/*
 * This method executes once at the beginning of your web app, after the
 * page has loaded.
 */ 
 

function init() {
	// CUSTOMIZE YOUR APP
	setTitle("RunEscape: A Survival Game"); // set title
	setByLine(""); // set name
	
	setCanvasSize(700,500); // canvas height and width in pixels
	
	setButton1("Restart"); // ("" if not using)
	setButton2("Help"); // ("" if not using)
	gameOver = false;
	setTimer(20); 			// set interval (in ms) for clock ticks. 0 = no clock.
	// END OF CUSTOMIZATIONS
	
	//*** Your Code Here
}

//*****************************
//KEYBOARD INPUT SECTION
//*****************************

/*
 * Called when a key is pressed. Works for all keys including shift, arrows, etc.
 * Note that the code is a KEY code, not necessarily an ASCII or UNICODE code. 
 * Therefore the char parameter might not be completely accurate.
 * 
 * @param (number) code The key code of the key pressed 
 * @param (string) char A single character string for the key pressed
 */
function keyDown(code,char) {
	  if(code == 37) {
        p1Left=true;
		p1Right=false;
		p1Jump=false;
    } 
	else if(code == 39) {
        p1Right=true;
		p1Left=false;
		p1Jump=false;
    }
	else if(code==32){
		jumping=true;
		p1Left=false;
		p1Right=false;
	}
}
/*
 * Very similar to keyDown, but the code is ASCII/UNICODE and it does not work
 * for keys such as shift or the arrow keys. 
 * 
 * @param (number) code The ASCII/UNICODE code of the key pressed 
 * @param (string) char A single character string for the key pressed
 */

/*
 * Called when a key is released. Works for all keys including shift, arrows, etc.
 * See the notes on keyUp() for more info
 * 
 * @param (number) code The key code of the key released 
 * @param (string) char A single character string for the key released
 */

function keyPress(code,char){}

 function keyUp(code, char) {
	 if(code == 37) {
        p1Left=false;
    }
    else if(code == 39) {
        p1Right = false;
    }
	else if(code== 32){
		jumping=false;
	}
}

//*****************************
//MOUSE INPUT SECTION -- UNUSED
//*****************************
function mouseDown(x, y, button) {

if(x<playButtonX+260 && x + 260>playButtonX && y<playButtonY+75 && 75 + y>playButtonY&&mouseDownButton==false)
	{
	canvas.fillRect(playButtonX,playButtonY,255,75);
	canvas.fillStyle="#FF0000";
	setTimeout(function(){
	mouseDownButton=true;
	score=0;
	},1000);
	
	select.play();
	
}
	}
function mouseUp(x, y, button) {

	if(x<playButtonX+260 && x + 260>playButtonX && y<playButtonY+75 && 75 + y>playButtonY&& mouseDownButton==false)
{
	setTimeout(function(){
	mouseDownButton=true;
	score=0;
	},1000);
}
}

function mouseMove(x, y) {
	if(x<playButtonX+260 && x + 260>playButtonX && y<playButtonY+75 && 75 + y>playButtonY&& mouseDownButton==false)
{
	canvas.fillRect(playButtonX,playButtonY,255,75);
	canvas.fillStyle="#FF0000";
}	
}
function mouseOver(x, y) {}
function mouseOut(x, y) {}

//*****************************
//BUTTON INPUT SECTION
//*****************************

/*
 * Called when button 1 is clicked.
 * 
 * @param (number) button The mouse button clicked (usually 0)
 */
function button1Click(button) {
//debugOut("button 1 click, button="+button);
gameOver=false;
mouseDownButton=false;

}
/*
 * Called when button 2 is clicked.
 * 
 * @param (number) button The mouse button clicked (usually 0)
 */
function button2Click(button) {
//debugOut("button 2 click, button="+button);
alert("Use left and right arrow keys to move.\nCollect lightning bolts to increase speed.\nDont get hit.\nHave Fun!");
}




//****************************
//TIMER SECTION
//****************************

/*
 * This function is called every time there is a clock tick. Set it up using
 * a call to setTimer(). If you set the timer to 0 it will stop.
 */
function clockTickEvent() {
//****************************
//Entity Movement
//****************************
	//move players
	if (p1Left) 
		playerX = playerX - playerSpeed;
	else if (p1Right)
		playerX = playerX + playerSpeed;			
	//move shrub
	if(mouseDownButton==true)
	{
	shrubX= shrubX + -4.5;
	shrubY= shrubY + 10;
	
	if(shrubY>500)
	{
	shrubX = 60;
	shrubY=-157;
	}
	}
	
	//move tree
	if(mouseDownButton==true)
	{
	treeX=treeX + -4.5;
	treeY=treeY + 10;
	
	if(treeY>500)
	{
	treeX= 60;
	treeY=-157;
	}
	}
	//wizard movement
	
	if(mouseDownButton==true)
	{
	wizardY= wizardY + 5;
	
	if(wizardY>500)
	{
	wizardX=Math.random()*300+180;
	wizardY=-150;
	}
	}
		
	//ogre growth/movement
	if(mouseDownButton==true)
	{
	ogreY=ogreY +5;
	
	if(ogreY>500)
	{
	ogreX=Math.random()*300+180;
	ogreY=-500;
	}
	}
	
	//house movement
	if(mouseDownButton==true)
	{
	houseY=houseY+8;
	houseX= houseX+2;
	
	if(houseY>500)
	{
	houseX=530;
	houseY=-30;
	}
	}
	//skeleton movement
	if(mouseDownButton==true)
	{
	skeletonY=skeletonY +5;
	
	if(skeletonY>500)
	{
		skeletonX= Math.random()*300+180;
		skeletonY=-225;
	}
	}
	//speedup movement
	if(mouseDownButton==true)
	{
	speedUpY=speedUpY+6;
	if(speedUpY>500)
	{
	speedUpX= Math.random()*300+180;
	speedUpY=-3500;
	}
	}
//****************************
//Collisions
//****************************
	
	//ogre/player collision
	if(mouseDownButton==true)
	{
	if(ogreX<playerX+54 && ogreX + 90>playerX && ogreY<playerY+114 && 90 + ogreY>playerY)
	{
		//collision
		impact.play();
		gameOver = true; 
		bust.play();
		
	}
	}

	//skeleton head/player collision
	if(mouseDownButton==true)
	{
	if(skeletonX<playerX+54 && skeletonX +50>playerX && skeletonY<playerY+113 && 23 + skeletonY>playerY)
	{
		impact.play();
		gameOver = true; 
		bust.play();
	
	}
	}
	
	//wizard/player collision
	if(mouseDownButton==true)
	{
	if(wizardX<playerX+54 && wizardX +38>playerX && wizardY<playerY+93 && 119 + wizardY>playerY)
	{
		impact.play();
		gameOver = true; 
		bust.play();
		
	}
	}
	//player/powerup collision
	
	if(mouseDownButton==true)
	{
	if(speedUpX<playerX+54 && speedUpX +50>playerX && speedUpY<playerY+113 && 50+ speedUpY>playerY)
	{
	zap.play();	
	
	playerSpeed=playerSpeed+0.25 ;
	setTimeout(function(){
		playerSpeed=playerSpeed-0.25
	},8000);
	
	}
	}
	
	
	//player collision w/ wall	
	if(playerX<160)
	{
	playerX=160;
	}
		
	if(playerX>520)
	{
	playerX=520;
	}
		
//-----------------------------------------------------------------------------------------------------------//
	
//****************************
//Draw Screen
//****************************
	
	canvas.fillRect(ogreX,ogreY, 119,119);	
	canvas.fillRect(playerX, playerY, 54, 113);
	canvas.fillRect(skeletonX, skeletonY, 55,23);
	canvas.fillRect(wizardX,wizardY, 58,119);
	canvas.fillRect(speedUpX,speedUpY, 50,50); 
	canvas.drawImage(backround, backroundX, backroundY);
	canvas.drawImage(player,playerX,playerY);
	canvas.drawImage(shrub,shrubX, shrubY);
	canvas.drawImage(tree,treeX,treeY);
	canvas.drawImage(wizard, wizardX, wizardY);
	canvas.drawImage(ogre,ogreX,ogreY);
	canvas.drawImage(house, houseX, houseY);
	canvas.drawImage(skeleton,skeletonX, skeletonY);
	canvas.drawImage(speedUp,speedUpX, speedUpY);
	canvas.font = "40px Impact"; 
	canvas.fillStyle = "white"; 
	canvas.fillText("SCORE: " + score, 10, 40); 
	score += 1; 
	
	if(mouseDownButton==false)
	{
	canvas.drawImage(startMenu,0,0);
	canvas.fillRect(playButtonX,playButtonY,255,75);
	canvas.font="25px Impact ";
	canvas.fillStyle="black";
	canvas.fillText("Begin Your Adventure!", 230,310);
	canvas.fillStyle="white";
	canvas.font="25px comic sans";
	canvas.fillStyle="black";
	canvas.fillText("Previous Score:" + previousScore, 400,60);
	previousScore=finalScore;
	
	}

	if(gameOver==false)
	{
		theme.play();
	}
		
	if (gameOver == true)
	{
	canvas.drawImage(backround, 0, 0); 
	canvas.fillStyle = "red"; 
	canvas.font = "100px Impact";
	canvas.fillText("GAME OVER!", 120, 280); 
	canvas.font = "40px Impact"; 
	canvas.fillStyle = "white"; 
	canvas.fillText("SCORE: " + finalScore, 375, 350); 
	score -= 1; 
	finalScore = score; 
	} 

//---------------------------------------------------------------------//
}