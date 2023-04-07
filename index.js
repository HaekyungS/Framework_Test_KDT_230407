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

const timeData = () => {
  const date = new Date();
  const day = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];

  const nowdate =
    date.getFullYear() +
    "년 " +
    (date.getMonth() + 1) +
    "월 " +
    date.getDate() +
    "일 " +
    day[date.getDay()-1];
  const nowtime =
    date.getHours() +
    "시 " +
    date.getMinutes() +
    "분 " +
    date.getSeconds() +
    "초 ";
  root.children[0].innerHTML = nowdate + "<br/>" + nowtime;
};

setInterval(timeData, 1000);
