///elemets
var next=document.getElementById("next")
var prev=document.getElementById("prev")
var slider_img= document.getElementsByClassName("slider_img")
var play = document.getElementsByClassName("play__link")
var stop_slide = document.getElementsByClassName("stop__link")
var bord=document.getElementById("bord")
var subimg=document.getElementById("bord").getElementsByTagName("img")
var img =document.getElementsByClassName("img")


///images--paff---array

var images=["bridje.jpg","colors.jpg","love.jpg","river.jpg","lib.jpg"];
var i =0;



/// functions next-previus

function setImg(){
  return slider_img[0].setAttribute("src","img/"+images[i])
 
}

prev.addEventListener("click",()=>{
  if(i>=images.length-1) i=-1;
  i++;
  img[i].classList.add("active")
  img[i-1].classList.remove("active")
  if(i===4){
    img[i].classList.remove("active")
  }
  return setImg()
})



next.addEventListener("click", ()=>{
  if(i<=0) i=images.length;
  i--;
  img[i].classList.toggle("active")
  img[i+1].classList.remove("active")
    if (i===0) {
      img[i].classList.remove("active")

 }
  return setImg()
})



////autoplay and stop function///


function autoplay (){
  if(i>=images.length-1){
    i=0
 }else{
   i++
 }
img[i].classList.toggle("active")
if(i>0){
  img[i-1].classList.remove("active")
}else if(i===0){
  img[4].classList.remove("active")
}
 return slider_img[0].setAttribute("src","img/"+images[i])
 

}

var interval = null;    

function startStuff() {
    interval = setInterval(autoplay,1000);
}

function stopStuff() {
    clearInterval(interval);
}

play[0].addEventListener("click",()=>{

startStuff()
stop_slide[0].style.color="green"  
play[0].style.color="red"
  
})

stop_slide[0].addEventListener("click",()=>{
  stopStuff()
  play[0].style.color="green"
  stop_slide[0].style.color="red"  
})


////imgaes-click function


function toggleItem(elem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function(e) {
      var current = this;
      for (var i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
          elem[i].classList.remove('active');
        } else if (current.classList.contains('active') === true) {
          current.classList.remove('active');
        } else {
          current.classList.add('active')
        }
      }
      e.preventDefault();
    });
  };
}

toggleItem(img)



img[0].addEventListener("click",()=>{

  return slider_img[0].setAttribute("src","img/"+images[0])
  

})

img[1].addEventListener("click",()=>{

  
  return slider_img[0].setAttribute("src","img/"+images[1])

})

img[2].addEventListener("click",()=>{
  return slider_img[0].setAttribute("src","img/"+images[2])

})

img[3].addEventListener("click",()=>{
  return slider_img[0].setAttribute("src","img/"+images[3])

})

img[4].addEventListener("click",()=>{
  return slider_img[0].setAttribute("src","img/"+images[4])

})




