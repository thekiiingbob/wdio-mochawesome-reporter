const expect = require('chai').expect

suite('Hooks suite', function() {
    test('A test', function() {
        browser.url('/index.html')
    })

    suiteTeardown('Suite cleanup', function() {
        browser.click('#thisdoesnotexist')
    })
})
