let {defineSupportCode} = require('cucumber');

defineSupportCode(({When, Then}) => {
  When('I navigate to {stringInDoubleQuotes}', function(site) {
    return browser.get(site);
  });

  Then('the title should be {stringInDoubleQuotes}', function(title) {
    return expect(browser.getTitle()).to.eventually.eql(title);
  });
});
