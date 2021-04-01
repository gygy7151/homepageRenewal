var drawArea = document.getElementById("myCanvas");
var drawPaint = drawArea.getContext("2d");

var grdPalet = drawPaint.createLinearGradient(0,0,200,0);
grdPalet.addColorStop(0,"#fc6076");
grdPalet.addColorStop(1,"#ff9a44");



/*
 *
 *drawPaint
 *Math.PI, true
 *
 */


//top1 
drawPaint.beginPath();
drawPaint.strokeStyle = grdPalet;
drawPaint.arc(155,150,100,0,Math.PI,true);
drawPaint.lineWidth = 50;
drawPaint.stroke();

//top2 
drawPaint.beginPath();
drawPaint.strokeStyle = grdPalet;
drawPaint.arc(360,150,100,0,Math.PI,true);
drawPaint.lineWidth = 50;
drawPaint.stroke();

//top3 
drawPaint.beginPath();
drawPaint.strokeStyle = grdPalet;
drawPaint.arc(565,150,100,0,Math.PI,true);
drawPaint.lineWidth = 50;
drawPaint.stroke();



/*
 *
 *drawPaint
 *Math.PI, false
 *
 */


//bottom1 
drawPaint.beginPath();
drawPaint.strokeStyle = grdPalet;
drawPaint.arc(155,150,100,0,Math.PI,false);
drawPaint.lineWidth = 50;
drawPaint.stroke();

//top2 
drawPaint.beginPath();
drawPaint.strokeStyle = grdPalet;
drawPaint.arc(360,150,100,0,Math.PI,false);
drawPaint.lineWidth = 50;
drawPaint.stroke();

//top3 
drawPaint.beginPath();
drawPaint.strokeStyle = grdPalet;
drawPaint.arc(565,150,100,0,Math.PI,false);
drawPaint.lineWidth = 50;
drawPaint.stroke();



