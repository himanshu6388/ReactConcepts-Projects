var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imagediv = document.querySelector("#image")


main.addEventListener("mousemove", function(dets){
    
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
        
       
    })
})

imagediv.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View more"
    gsap.to(cursor,{
        scale:2,
        backgroundColor: "#ffffff8a"
    })
})
imagediv.addEventListener("mouseleave", function(){
   cursor.innerHTML = ''
    gsap.to(cursor,{
        scale:1,
        backgroundColor: "#fff"
    })
})

