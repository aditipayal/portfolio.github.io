function myFnc(e){
    e.classList.toggle("mobile-nav-active");
     var element = document.getElementById('header'),
     Style = window.getComputedStyle(element),
     left = Style.getPropertyValue("left");
     if(left == "0px"){
       element.style.left = "-300px";
     }else{
       element.style.left = "0px";
     }
 }