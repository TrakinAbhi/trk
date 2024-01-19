var tl = gsap.timeline();

tl.from("#nav-left img, #nav-center h4, #nav-right h4, #nav-right button",{
    y:50,
    duration:0.5,
    delay:1,
    opacity:0,
    stagger:0.2,
});

tl.from("#home h1",{
    x:100,
    opacity:0,
    duration:0.5,
    stagger:0.2,
});

tl.from("#home>img",{
    scale:0,
    duration:0.7,
    opacity:0,
    stagger:0.2,
});

gsap.to("#main #scroll",{
    // opacity:0,
    y:30,
    duration:0.6,
    repeat:-1,
    yoyo:true,
})