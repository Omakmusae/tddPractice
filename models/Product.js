const mongoose = require('mongoose');
//생성자 함수를 mongoose에서 제공해서 새로운 스키마를 정의할 수 있게 해줌
const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    price: {
        type:Number
    }
})
//mongo db Atlas의 cluster에는 products라는 이름의 db 컬렉션이 생성됨, 사용자가 설정한 이름에 s가 추가로 붙음
const Product = mongoose.model("Product", productSchema)

module.exports=Product;