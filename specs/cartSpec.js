const { Then } = require("cucumber");
const home = require('../pages/cartPage');

Then('é possível ver que o produto {string} está presente no carrinho', function (product) {
    return home.productIsPresentOnCart(product);
});