"use strict";

const present = require("./wait").present,
    scroll = require("./scroll");

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const assert = chai.assert;

exports.fillText = function (el, value) {
    present(element(by.css(el))).clear();
    return element(by.css(el)).sendKeys(value);
};

exports.elementClick = function (el) {
    return scroll.toElement(present(element(by.css(el)))).click();
};

exports.assertText = function (el, content) {
    let result = false;
    return present(element.all(by.css(el)).getAttribute('title'))
        .getText()
        .then(elements => {
            elements.forEach(el => {
                if (el.startsWith(content)) {
                    result = true;
                }
            });
            return assert.isTrue(result);;
        });
};

exports.buttonClick = function (el) {
    return scroll.toElement(present(element(by.buttonText(el)))).click();
};

exports.elementByTextClick = function (el, content) {
    return scroll.toElement(present(element(by.linkText(content)))).click();
};
