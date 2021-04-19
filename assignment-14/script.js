var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(300, 150, 40, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(500, 345, 40, 0, 3 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(800, 200, 40, 0, 4 * Math.PI);
ctx.fillStyle = "grey";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 50, 40, 0, 1 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.arc(700, 300, 40, 0, 5 * Math.PI);
ctx.fillStyle = "beige";
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.arc(600, 500, 40, 0, 6 * Math.PI);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.stroke();

ctx.font = "20px Tahoma";
ctx.fillStyle = "#000000";
ctx.fillText("Mychalla", 500, 595);
