window.addEventListener("scroll",function(){
    var head = document.querySelector("header");
    head.classList.toggle("sticky",this.window.scrollY>0);
});

