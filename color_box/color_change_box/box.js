var btn = document.querySelector("button");
var box = document.querySelector("#box");
var main = document.querySelector("#main");

btn.addEventListener("click",function(){
    var a1 = Math.floor(Math.random()*255);
    var a2 = Math.floor(Math.random()*255);
    var a3 = Math.floor(Math.random()*255);
console.log(a1,a2,a3)
    box.style.backgroundColor = `rgb(${a1},${a2},${a3})`
    main.style.backgroundColor = `rgb(${a2},${a3},${a1})`
    btn.style.backgroundColor = `rgb(${a3},${a1},${a2})`
})
