// console.log("Pehle");

// setTimeout(function(){
//     console.log("beech mein");
// },5000)

// console.log("baad mein")


// setTimeout(function(){
//     var ans = new Promise((res,rej)=>{
//     if(true){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })
// ans
// .then(function(){
//     console.log("resolve ho gaya tha....")
// })
// .catch(function(){
//     console.log("reject ho gyaa tha !!!!")
// }
// )},5000)

setTimeout(function(){
var ans = new Promise((res,rej) => {
var n = Math.floor(Math.random()*10);
if(n<5){
    return res();
}
else{
    return rej();
}
})
ans
.then(function(){
    console.log("below");
})
.catch(function(){
    console.log("above");
})
},5000)