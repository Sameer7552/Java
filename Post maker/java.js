
function changecolor() {
  var post = document.getElementById("box");
  post.style.background = event.target.value;
  change();
  if (event.target.value == "#ffffff") {
    changeback();
  }
}
function color0() {
  var post = document.getElementById("box");
  post.style.background = "#ffffff";
  changeback();
}
function color1() {
  var post = document.getElementById("box");
  post.style.background = "linear-gradient(to right, #c2e59c, #64b3f4)";
  change();
}
function color2() {
  var post = document.getElementById("box");
  post.style.background = "linear-gradient(to left, #7b4397, #dc2430)";
  change();
}
function color3() {
  var post = document.getElementById("box");
  post.style.background = "linear-gradient(20deg, #8a2387, #e94057, #f27121)";
  change();
}
function color4() {
  var post = document.getElementById("box");
  post.style.background = "linear-gradient(50deg, #dce35b, #45b649)";
  change();
}
function img1() {
  var post = document.getElementById("box");
  post.style.background = "url(img/bag1.png)";
  change();
}
function img2() {
  var post = document.getElementById("box");
  post.style.background = "url(img/bag2.png)";
  change();
}
function img3() {
  var post = document.getElementById("box");
  post.style.background = "url(img/bag3.png)";
  change();
}
function img4() {
  var post = document.getElementById("box");
  post.style.background = "url(img/bag4.png)";
  change();
}
function img5() {
  var post = document.getElementById("box");
  post.style.background = "url(img/bag5.png)";
  change();
}
function img6() {
  var post = document.getElementById("box");
  post.style.background = "url(img/bag6.png)";
  change();
}
function change() {
  var post = document.getElementById("box");
  post.style.backgroundSize = "100% 100%"
  post.style.height = "45vh"
  var container = document.getElementById("cont");
  container.style.height = "40em"
  container.style.marginTop = "-20em"
  var btn1 = document.getElementById("btn-1");
  btn1.style.marginTop = "0px";
  var btn2 = document.getElementById("btn-2");
  btn2.style.marginTop = "0px";
}
function changeback() {
  var post = document.getElementById("box");
  post.style.height = "30vh"
  var container = document.getElementById("cont");
  container.style.height = "35em"
  container.style.marginTop = "-19em"
}
function fontsize() {
  var inputValue = document.getElementById("font").value;
  var post = document.getElementById("box");
  post.style.fontSize = inputValue + "px";
}
function changestyle() {
  console.log(event.target.innerText);
  var post = document.getElementById("box");
  if (event.target.innerText == "B") {
    if (post.style.fontWeight == "bolder") {
      post.style.fontWeight = "normal";
    }
    else {
      post.style.fontWeight = "bolder";
    }
  }
  else if (event.target.innerText == "I") {
    if (post.style.fontStyle == "italic") {
      post.style.fontStyle = "normal";
    }
    else {
      post.style.fontStyle = "italic";
    }
  }
  else if (event.target.innerText == "U") {
    if (post.style.textDecoration == "underline") {
      post.style.textDecoration = "none";
    }
    else {
      post.style.textDecoration = "underline";
    }
  }
}

function fontcolor(){
  var post = document.getElementById("box");
  post.style.color = event.target.value;
}

function left(){
  var post = document.getElementById("box");
  post.style.textAlign = "start";
}
function middle(){
  var post = document.getElementById("box");
  post.style.textAlign = "center";
}
function right(){
  var post = document.getElementById("box");
  post.style.textAlign = "end";
}

var btn2 = document.getElementById("btn-2");
btn2.style.display = "none";
function post(){

  var btn1 = document.getElementById("btn-1");
  btn1.style.display = "none";
  var btn2 = document.getElementById("btn-2");
  btn2.style.display = "block";
}
function post(){

  var btn1 = document.getElementById("btn-1");
  btn1.style.display = "none";
  var btn2 = document.getElementById("btn-2");
  btn2.style.display = "block";
  btn2.style.marginTop = "5px"
  var cont2 = document.getElementById("cont2");
  cont2.style.display = "none";
  var cont3 = document.getElementById("cont3");
  cont3.style.display = "none";
  var post = document.getElementById("box");
  post.style.pointerEvents = "none";
  post.style.height = "50vh"
  var container = document.getElementById("cont");
  container.style.height = "40em"
  container.style.marginTop = "-20em"
}
function back(){

  location.reload()
}

var margin = 10,
            instance1 = new emojiButtonList( "button1", {
                dropDownXAlign: "left",
                textBoxID: "box",
                yAlignMargin: margin,
                xAlignMargin: margin
            } )

        function emojiClickEvent( emojiText ) {
            document.title += " " + emojiText;
        }