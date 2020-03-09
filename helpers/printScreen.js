exports.stepPrintScreen = self => {
   return browser.takeScreenshot().then(function (screenshot) {
      const decodedImage = new Buffer.from(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
      self.attach(decodedImage, 'image/png');
   });
};