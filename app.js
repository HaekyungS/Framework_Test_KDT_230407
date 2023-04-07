import http from "http";
import fs from "fs";
import { responseSetting, content } from "./module.js";

const indexHtml = fs.readFileSync('./index.html');
const indexJS = fs.readFileSync('./index.js');
const moduleJS = fs.readFileSync('./module.js');

// console.log(indexHtml)

const server = http.createServer((request,response)=>{
  console.log('Open the 3050~');
if(request.method==="GET"){
  if(request.url==="/"){
    responseSetting(response,content.HTML,indexHtml);
  }
  else if(request.url==="/index.js"){
    responseSetting(response,content.JS,indexJS);
  }
  else if(request.url==="/module.js"){
    responseSetting(response,content.JS,moduleJS);
  }
}
}).listen(3050)