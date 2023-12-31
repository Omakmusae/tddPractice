require("dotenv").config();

const express = require('express'); //Express 모듈 불러오기
const productRoutes = require('./routes'); 

const PORT = 5000; //Express 서버를 위한 포트 설정
const HOST = '0.0.0.0'; //호스트 지정
const app = express(); //새로운 Express 어플 생성, 위에서 import한 express 모듈을 이용하여 생성
const mongoose = require('mongoose');//몽고db를 사용하기 위한 모듈

console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("MongoDB connected!"))
    .catch((err)=> console.log(err));

app.use(express.json())//express에 들어 있는 내장 미들웨어 함수로, bodyParser를 대신 할 수 있음

app.use("/api/products", productRoutes)
app.use((error, req, res, next) => {
    res.status(500).json({message : error.message})
})


app.listen(PORT, HOST); //9번 줄에서 생성한 express 서버 객체를 시작, 포트와 호스트에서 HTTP 서버를 시작
console.log(`Running on http://${HOST}:${PORT}`)

module.exports = app;