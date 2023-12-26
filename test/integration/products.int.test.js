const request = require('supertest')//supertest는 request로 가져오는것이 관용적
const app = require('../../server')
const newProduct = require('../data/new-product.json')




it("POST /api/products", async()=> {
    const response = await request(app)
        .post("/api/products")
        .send(newProduct);
    expect(response.statusCode).toBe(201)
    expect(response.body.name).toBe(newProduct.name)
    expect(response.body.description).toBe(newProduct.description)
})

//일부러 에러 발생하는 테스트
it ("should return 500 on POST /api/products", async() => {
    const respone = await request(app)
        .post('/api/products')
        .send({name:"phone"})
    expect(respone.statusCode).toBe(500);
    console.log('response.body : #########', respone.body)
    expect(respone.body).toStrictEqual({message: "Product validation failed: description: Path `description` is required."})

})


// afterAll(async () => {
//     await new Promise(resolve => app.close(resolve));
//   });
  