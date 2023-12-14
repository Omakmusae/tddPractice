const productController = require('../../controller/product')
const productModel = require('../../models/Product')
const httpMocks = require('node-mocks-http')
const newProduct = require('../data/new-product.json')

productModel.create = jest.fn();

let req, res, next;

beforeEach(() => {
    req = httpMocks.createRequest();
    //console.log(req);
    res = httpMocks.createResponse();
    next = null;
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
    it("should return 201 response code", () => {
        productController.createProduct(req,res, next)
        expect(res.statusCode).toBe(201);
    })

})