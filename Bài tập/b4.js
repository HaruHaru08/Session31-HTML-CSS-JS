document.getElementById("btn-click").onclick=function(){
    document.getElementById("btn-click").style.backgroundColor="#999999";
    document.getElementById("container").style.backgroundColor="#999999";
    document.getElementsByClassName("box")[0].style.display="flex";
    document.getElementsByClassName("box")[0].classList.add("hidden-box");
};
document.getElementById("icon").onclick=function(){
    document.getElementById("btn-click").style.backgroundColor="rgb(223, 223, 223)";
    document.getElementsByClassName("box")[0].style.display="none";
    document.getElementById("container").style.backgroundColor="#ffffff";
}