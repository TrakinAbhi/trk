var widthInp = document.querySelector("#height");
var heightInp = document.querySelector("#width");
const main = document.querySelector("#main");
var btn = document.querySelector("button");
// var topval = topval;
// var leftval = leftval;

btn.addEventListener("click",function(){
     const div = document.createElement("div");
     div.style.width = widthInp.value + "px";
     div.style.height = heightInp.value + "px";

     const topval = Math.random()*main.offsetWidth;
     const leftval = Math.random()*main.offsetHeight;

     div.style.position = "absolute";
     div.style.top = topval + "px";
     div.style.left = leftval + "px";
     div.style.backgroundColor = "#890304";

     main.appendChild(div);
})
