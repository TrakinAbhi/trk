var btn = document.querySelector("button");
var arr = ["tri","circle","rho","hex","square"]
var box = document.querySelector("#box")

btn.addEventListener("click",function(){
    var a = Math.floor(Math.random()*arr.length)
    box.classList.add(arr[a])
})