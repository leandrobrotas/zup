const helpers = require('../helpers');

const productIsPresentOnCart = product => {
    return helpers.assertText(".BasketItemProduct-info p", product);
}

module.exports = {
    productIsPresentOnCart
}