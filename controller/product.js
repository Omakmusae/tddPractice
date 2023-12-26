exports.hello = (req, res) => {
    res.send('안녕하세요')
}


//위 hello 내용은 미들웨어 부분, 이부분을 routes에서 가져와서 사용