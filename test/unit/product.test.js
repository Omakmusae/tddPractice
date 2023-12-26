const productController = require('../../controller/product')
const productModel = require('../../models/Product')
const httpMocks = require('node-mocks-http')
const newProduct = require('../data/new-product.json');
const Product = require('../../models/Product');


productModel.create = jest.fn();

let req,res,next;

beforeEach(() => {
    req = httpMocks.createRequest(); // HTTP request argument to the middleware function
    //console.log(req);
    res = httpMocks.createResponse();//HTTP response argument to the middleware function
    next = jest.fn(); //Callback argument to the middleware function, 에러를 next()에 넣어서 전달할 수 있음
})


//describe 를 통해 그룹화 가능
describe("Product Controller Create", () => {
    beforeEach(() => {
        req.body=newProduct;
    })

    test('1. should have a createProduct function', () => {
        expect(typeof productController.createProduct).toBe("function");
    })
    test("2. should call ProductModel.create", async () => {
        
        await productController.createProduct(req,res, next);
        expect(productModel.create).toBeCalledWith(newProduct);
    })

    test("3. should return 201 response code", async () => {
        await productController.createProduct(req,res, next)
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    })

    it("4. should return json body in response", async () => {
        Product.create.mockReturnValue(newProduct);
        await productController.createProduct(req,res,next);
        expect(res._getJSONData()).toStrictEqual(newProduct);
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
        console.log("@@@@@@@@@@@",req.body)
        console.log(errorMessage)
        expect(next).toBeCalledWith(errorMessage);
    })
})

describe('product controller get', ()=> {
    it('should have a getProducts function', () => {
        expect(typeof productController.getProducts).toBe("function")
    })
})