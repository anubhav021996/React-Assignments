import "./index.css";
import image from "../images/abc.jpg";

var img = document.createElement("img");
img.setAttribute("src",image);

var h1 = document.createElement("H1");
h1.innerText = "Hello World";
document.querySelector(".root").append(h1,img);