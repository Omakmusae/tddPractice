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
    const response = await request(app)
        .post('/api/products')
        .send({name:"phone"})
    expect(response.statusCode).toBe(500);
    console.log('response.body : #########', response.body)
    expect(response.body).toStrictEqual({message: "Product validation failed: description: Path `description` is required."})

})

//전체 조회 통합테스트
it ("GET /api/products", async() => {
    const response = await request(app).get('/api/products')
    expect(response.statusCode).toBe(200);
    //toBeTruthy는 expect가 트루인지, isArray는 배열인지 아닌지 판별
    expect(Array.isArray(response.body)).toBeTruthy();
    //toBeDefined는 변수가 undefined가 아닌지 체크
    expect(response.body[0].name).toBeDefined();
    expect(response.body[0].description).toBeDefined();
    
})



afterAll(async () => {
    await new Promise(resolve => app.close(resolve));
  });
  