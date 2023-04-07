import { CreateDoc } from "./module.js";

const root = document.getElementById("root");

root.style.cssText =
  "width:100vw; height:100vh; background : black; display:flex; justify-content:center; align-items:center;";

// const divstyle={
//   width : "80%",
//   height : "20%",
//   fontSize : "20px"
// }

CreateDoc("div", root);
root.children[0].style.width = "80%";
root.children[0].style.height = "10%";
root.children[0].style.fontSize = "30px";
root.children[0].style.textAlign = "center";
root.children[0].style.fontFamily = "Poor Story";
root.children[0].style.background = "white"

