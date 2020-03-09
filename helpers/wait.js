"use strict";

var driver = browser.driver;

var TIMEOUT = 100000;

exports.present = function (element) {
    driver.wait(element.isPresent.bind(element), TIMEOUT).catch(logWaitTimeout(element));
    return element;
};

function logWaitTimeout(element) {
    return function (e) {
        e.message += " for selector " + element.locator();
        return protractor.promise.rejected(e);
    };
}