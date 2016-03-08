// spec.js
describe('Zachary Smith\'s site', function() {
  it('should have a title', function() {
    browser.get('https://billyzacsmith.com/');

    expect(browser.getTitle()).toEqual('Zachary Smith');
  });
});
