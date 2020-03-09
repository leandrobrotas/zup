"use strict";

exports.toElement = function (element) {
    browser.executeAsyncScript(function (element, done) {
        if (element && element.getBoundingClientRect().top < 60) {
            window.scrollTo(0, 0);
            return setTimeout(done, 0);
        }
        done();
    }, element);
    return element;
};