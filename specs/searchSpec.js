const { Given, When, Then, After, Before } = require("cucumber");
const driver = browser.driver;
const home = require('../pages/searchPage');
const printscreen = require('../helpers/printScreen');

Given('que seja feita uma pesquisa pelo produto {string}', function (product) {
    return home.searchProduct(product);
});

Given('adiciono o produto ao carrinho', function () {
    return home.addToCart();
});
Then('o produto {string} é apresentado no resultado', function (product) {
    return home.searchResult(product);
});

Then('é apresentado a mensagem {string}', function (message) {
    return home.productNotFound(message);
});

When('clico na sugestão de consulta {string}', function (suggestion) {
    return home.consultationSuggestions(suggestion);
});

After(function () {
    let self = this;
    return printscreen.stepPrintScreen(self);
});

Before(function () {
    return driver.get("https://www.magazineluiza.com.br/").then(() => {
        browser.ignoreSynchronization = true;
    });
});