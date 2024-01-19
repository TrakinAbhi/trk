var btn = document.querySelector("button")
var head = document.querySelector("h1")

var flag = 0;
btn.addEventListener("click",function(){
    if(flag == 0){
    head.innerHTML = "friends"
    head.style.color = "green"
    flag = 1
    }
    else{
        head.innerHTML = "strangers"
        head.style.color = "red"
        flag = 0
    }
})