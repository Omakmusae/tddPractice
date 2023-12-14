const productController = require('../../controller/product')
const mock = jest.fn();


//describe 를 통해 그룹화 가능
describe("Product Controller Create", () => {
    test('should have a createProduct function', () => {
        expect(typeof productController.createProduct).toBe("function");
    })

})