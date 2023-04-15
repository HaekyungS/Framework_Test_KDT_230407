import { CreateDoc } from "./module.js";

const root = document.getElementById("root");

root.style.cssText =
  "width:100vw; height:100vh; background : black; display:flex; justify-content:center; align-items:center;";

const divstyle = {
  width: "80%",
  height: "20%",
  fontSize: "20px",
  textAlign: "center",
  fontFamily: "Poor Story",
  background: "white",
};

CreateDoc("div", root, divstyle);

const timeData = () => {
  const date = new Date();
  const day = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ];

  const nowdate =
    date.getFullYear() +
    "년 " +
    (date.getMonth() + 1) +
    "월 " +
    date.getDate() +
    "일 " +
    day[date.getDay()];
  const nowtime =
    date.getHours() +
    "시 " +
    date.getMinutes() +
    "분 " +
    date.getSeconds() +
    "초 ";
  root.children[0].innerHTML = nowdate + "<br/>" + nowtime;

  if((date.getMinutes()%15) === 0){
    root.style.background = "blue";
    root.children[0].style.background = "skyblue";
  }else{
    root.style.background = "black";
    root.children[0].style.background = "white";
  }
};

setInterval(timeData, 1000);
