document.getElementById("btn-change").onclick = function () {
  if (document.getElementById("container").style.backgroundColor === "black") {
    document.getElementById("container").style.backgroundColor = "white";
    document.getElementsByClassName("text")[0].style.color = "black";
    document.getElementsByClassName("text")[1].style.color = "black";
  } else {
    document.getElementById("container").style.backgroundColor = "black";
    document.getElementsByClassName("text")[0].style.color = "white";
    document.getElementsByClassName("text")[1].style.color = "white";
  }
};
