canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover2_height=100;
rover2_width=90;

background_image="racing.jpg";
rover_image="car1.png";
rover2_image="download.png";

rover_x=10;
rover_y=10;
rover2_x=10;
rover2_y=125;

function add() {

    background_Tag=new Image();
    background_Tag.onload=uploadBackground;
    background_Tag.src=background_image;

    rover_Tag=new Image();
    rover_Tag.onload=uploadRover;
    rover_Tag.src="car1.png";

    rover_Tag2=new Image();
    rover_Tag2.onload=uploadRover2;
    rover_Tag2.src="download.png";
}

function uploadBackground() {
    ctx.drawImage(background_Tag, 0,0,canvas.width,canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_Tag,rover_x,rover_y,rover_width,rover_height);
}

function uploadRover2() {
    ctx.drawImage(rover_Tag2,rover2_x,rover2_y,rover2_width,rover2_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e) {
keypress=e.keyCode;
console.log(keypress);

if(keypress=='38')
{
up();
console.log("up");

}


if(keypress=='40')
{
down();
console.log("down");

}

if(keypress=='37')
{
left();
console.log("left");

}

if(keypress=='39')
{
right();
console.log("right");

}


if(keypress=='65')
{
left2();
console.log("left");

}

if(keypress=='68')
{
right2();
console.log("right");

}

if(keypress=='87')
{
up2();
console.log("up");

}

if(keypress=='83')
{
down2();
console.log("down");


}


if (rover_x > 700) 
{
    console.log("car1 won!!!!");
    document.getElementById("winner").innerHTML="car1 won!!!!";
}
else if (rover2_x > 700)
{
    console.log("car2 won!!!");
    document.getElementById("winner").innerHTML="car2 won!!!";
}

}
function up() {
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        uploadBackground();
        uploadRover();
        uploadRover2();
    }
}

function up2() {
    if(rover2_y>=0)
    {
        rover2_y=rover2_y-10;
        uploadBackground();
        uploadRover2();
        uploadRover();
    }
}

function down() {
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        uploadBackground();
        uploadRover();
        uploadRover2();
    }
}

function down2() {
    if(rover2_y<=500)
    {
        rover2_y=rover2_y+10;
        uploadBackground();
        uploadRover2();
        uploadRover();
    }
}

function right() {
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        uploadBackground();
        uploadRover();
        uploadRover2();
    }
}


function right2() {
    if(rover2_x<=700)
    {
        rover2_x=rover2_x+10;
        uploadBackground();
        uploadRover2();
        uploadRover();
    }
}


function left() {
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        uploadBackground();
        uploadRover();
        uploadRover2();
    }
}


function left2() {
    if(rover2_x>=0)
    {
        rover2_x=rover2_x-10;
        uploadBackground();
        uploadRover2();
        uploadRover();
    }
}

