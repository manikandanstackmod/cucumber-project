const { Given, When, Then } = require('@cucumber/cucumber');

Given('I open Google', function () {
  console.log('Opening Google...');
});

When('I search for {string}', function (searchTerm) {
  console.log(`Searching for: ${searchTerm}`);
});

Then('I should see results related to {string}', function (searchTerm) {
  console.log(`Results shown for: ${searchTerm}`);
});
