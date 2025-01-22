const t1 = gsap.timeline();
t1.to("#box",{
    x:0,
    backgroundColor:"green",
    duration:1,
    repeat:-1
})
// .to(".box2", {
//     duration:1,
//     x:400,
//     y:200
// })
// .to(".box3", {
//     duration:2,
//     y:-200,
//     x:400,
//     rotation:360
// })

t1.from("h1",{
    opacity:0,
    y:20,
    duration:1,
    stagger:0.6,
    delay:0,
    repeat:1
})