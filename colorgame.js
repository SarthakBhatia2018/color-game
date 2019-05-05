var numsquares=6;
var colors=generaterandomcolor(numsquares);
var squares=document.querySelectorAll(".square");
var	pickedcolor=pickcolor();
var colorDisplay=document.querySelector("#colorDisplay")
var messageDisplay=document.querySelector(".messageDisplay")
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function()
{
easybtn.classList.add("selected");
hardbtn.classList.remove("selected");
messageDisplay.textContent="";
numsquares=3;
colors=generaterandomcolor(numsquares);
pickedcolor=pickcolor();
colorDisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;++i)
{
if(i>=3)
{
	squares[i].style.display="none";
}
else
{squares[i].style.background=colors[i];
}
}
})
hardbtn.addEventListener("click",function()
{
easybtn.classList.remove("selected");
hardbtn.classList.add("selected");
messageDisplay.textContent="";
numsquares=6;
colors=generaterandomcolor(numsquares);
pickedcolor=pickcolor();
colorDisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;++i)
{

squares[i].style.background=colors[i];
squares[i].style.display="block";
}

})
reset.addEventListener("click",function()
{	reset.textContent="New colors";
h1.style.backgroundColor="steelblue";
messageDisplay.textContent="";
//generate random colors
colors=generaterandomcolor(numsquares);
//random color choosed
pickedcolor=pickcolor();
//change text content
colorDisplay.textContent=pickedcolor;
//change the colors
for(var j=0;j<squares.length;++j)
{
squares[j].style.backgroundColor=colors[j];
}
var clicked=this.style.background;


})
colorDisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;++i)
{
squares[i].style.background=colors[i];

squares[i].addEventListener("click",function()
{
var clickedcolor=this.style.background;
if(clickedcolor === pickedcolor)
{
messageDisplay.textContent="correct";
changecolors(clickedcolor);
h1.style.backgroundColor=clickedcolor;
reset.textContent="Play Again";
}	
else
{
messageDisplay.textContent="Try Again";
this.style.backgroundColor="#232323";	
}
})
}
function changecolors(color)
{
for(var j=0;j<squares.length;++j)
{	
squares[j].style.background=color;
}
}
function pickcolor()
{ 
var y=Math.floor(Math.random() * colors.length);
return colors[y];
}	
function generaterandomcolor(num)
{
var arr=[];
for(var i=0;i<num;++i)
{	
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
arr.push("rgb("+r+", "+g+", "+b+")");
}
return(arr);
} 