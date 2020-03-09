const helpers = require('../helpers');

const searchProduct = product => {
    helpers.fillText(".content-search [name='q']", product);
    return helpers.elementClick("[id='btnHeaderSearch']");
};

const searchResult = value => {
    return helpers.assertText(".nm-product-name", value)
}

const addToCart = () => {
    helpers.elementClick(".nm-product-name");
    helpers.buttonClick("Adicionar à sacola");
    return helpers.elementClick(".price-warranty__btn--continue");
}

const productNotFound = message => {
    return helpers.assertText(".message1", message);
}

const consultationSuggestions = suggestion => {
    return helpers.elementByTextClick(".neemu-suggestions-container", suggestion);
}

module.exports = {
    searchProduct,
    searchResult,
    addToCart,
    productNotFound,
    consultationSuggestions
}