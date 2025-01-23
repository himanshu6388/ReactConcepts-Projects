var path = `M 0 100 Q 0 100 1190 100`;
var finalPath = `M 0 100 Q 0 100 1190 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove",function(dets){
    var path = `M 0 100 Q ${dets.x} ${dets.y} 1190 100`;
    console.log(path)

    gsap.to("svg path",{
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(dets){

    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic(1,0.2)"
    })
})