const cube = document.querySelector('.cube');

function rotateCube(event) {
  if (event.key === 'w') {
    cube.style.transform = 'rotateX(-90deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 's') {
    cube.style.transform = 'rotateX(90deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'd') {
    cube.style.transform = 'rotateY(-90deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'a') {
    cube.style.transform = 'rotateY(90deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'q') {
    cube.style.transform = 'rotateY(0deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'e') {
    cube.style.transform = 'rotateY(180deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'r') {
    cube.style.transform = 'rotateY(45deg) rotateZ(-10deg) rotateX(-10deg)';
  }
}

document.addEventListener('keydown', rotateCube);
function hideWindow() {
  var x = document.getElementById("Text");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("ShowButton");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
function toggleThemedark() {
  document.getElementById("html").style.backgroundColor = "rgb(31, 31, 31)";
  document.getElementById("Text").style.color = " rgba(0, 0, 0, 0.362);";
  document.getElementById("ToggleThemeDark").style.visibility = "visible"
  document.getElementById("ToggleThemeWhite").style.visibility = "hidden"
}
function toggleThemewhite() {
  document.getElementById("html").style.backgroundColor = "white";
  document.getElementById("Text").style.color = "rgba(0, 0, 0, 0.362);";
  document.getElementById("ToggleThemeDark").style.visibility = "hidden"
  document.getElementById("ToggleThemeWhite").style.visibility = "visible"
}