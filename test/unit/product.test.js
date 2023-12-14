const productController = require('../../controller/product')
const productModel = require('../../models/Product')
const httpMocks = require('node-mocks-http')
const newProduct = require('../data/new-product.json')

productModel.create = jest.fn();

beforeEach(() => {
    let req = httpMocks.createRequest();
    //console.log(req);
    let res = httpMocks.createResponse();
    let next = null;
}) 



//describe 를 통해 그룹화 가능
describe("Product Controller Create", () => {
    beforeEach(() => {
        req.body=newProduct;
    }) 

    test('should have a createProduct function', () => {
        expect(typeof productController.createProduct).toBe("function");
    })
    it("should call ProductModel.create", () => {
        console.log(productModel.create)
        productController.createProduct(req,res, next);
        expect(productModel.create).toBeCalledWith(newProduct);
    })

})