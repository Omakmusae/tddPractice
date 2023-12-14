const request = require('supertest')
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


it ("should return 500 on POST /api/products", async() => {
    const respone = await request(app)
        .post('/api/products')
        .send({name:"phone"})
    expect(respone.statusCode).toBe(500);
    console.log('response.body : ', respone.body)
    expect(respone.body).toStrictEqual({message: ""})
})


afterAll(async () => {
    await new Promise(resolve => app.close(resolve));
  });
  