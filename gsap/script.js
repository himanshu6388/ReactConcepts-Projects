const t1 = gsap.timeline();
// t1.to("#box",{
//     x:0,
//     backgroundColor:"green",
//     duration:1,
//     repeat:-1
// })
// .to(".bofx2", {
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

// t1.from("h1",{
//     opacity:0,
//     y:-20,
//     duration:1,
//     delay:0.4,
// })
// t1.from("nav div li",{
//     opacity:0,
//     y:-20,
//     duration:1,
//     stagger:0.3,
    
// })
// t1.from("h2",{
//     y:20,
//     opacity:0,
//     duration:0.5,
//     scale:0.3
// })
gsap.from("#page1 #box",{
    scale:0,
    duration:2,
    rotate:360
})
// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })
// gsap.from("#page3 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:"#page3 #box"
// })

gsap.from("#page2 h1",{
    opacity:0,
    x:500,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})
gsap.from("#page2 h2",{
    opacity:0,
    x:-500,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        markers:true,
        start:"top 70%"
    }
})