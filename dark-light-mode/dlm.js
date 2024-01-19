var btn = document.querySelector("button");
var flag = 0;

btn.addEventListener("click",function(){
    if(flag ==0){
    var root = document.documentElement
    root.style.setProperty("--primary","#111")
    root.style.setProperty("--secondary","white")
    btn.innerHTML = "dark"
    flag = 1
    }else{
        var root = document.documentElement
        root.style.setProperty("--secondary","#111")
        root.style.setProperty("--primary","white")
        btn.innerHTML = "light"
        flag = 0;

    }
})