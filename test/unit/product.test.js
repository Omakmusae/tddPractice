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
    it("should call ProductModel.create", async () => {
        console.log(productModel.create)
        await productController.createProduct(req,res, next);
        expect(productModel.create).toBeCalledWith(newProduct);
    })
    it("should return 201 response code", async () => {
        await productController.createProduct(req,res, next)
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    })
    it("should return json body in response", async () => {
        productModel.create.mockReturnValue(newProduct)
        await productController.createProduct(req,res,next);
        expect(res._getJSONData()).toStrictEqual(newProduct);
    })

    it("should handle errors", async () => {
        const errorMessage = {message : "description property missing"};
        const rejectPromise = Promise.reject(errorMessage);
        productModel.create.mockReturnValue(rejectPromise); //임의로 에러 시, return 값 선언
        await productController.createProduct(req,res,next);
        expect(next).toBeCalledWith(errorMessage);
    })


})