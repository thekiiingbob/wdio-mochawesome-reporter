const expect = require('chai').expect
const clean = require('../helper').clean
const run = require('../helper').run

suite('WDIO Mochawesome Tests', () => {
    setup(clean)

    test('Detailed validation of a passing test', () => {
        return run(['passing']).then((results) => {
            console.log('evaluating results')
            expect(results).to.have.lengthOf(1)
            let result = results[0]

            // validate stats
            expect(result.stats.suites, 'stats.suites is not correct').to.be.equal(1)
            expect(result.stats.tests, 'stats.tests is not correct').to.be.equal(1)
            expect(result.stats.testsRegistered, 'stats.testsRegistered is not correct').to.be.equal(1)
            expect(result.stats.passes, 'stats.passes is not correct').to.be.equal(1)
            expect(result.stats.pending, 'stats.pending is not correct').to.be.equal(0)
            expect(result.stats.failures, 'stats.failures is not correct').to.be.equal(0)
            expect(result.stats.duration, 'stats.duration is not correct').to.be.greaterThan(0)
            expect(result.stats.passPercent, 'stats.passPercent is not correct').to.be.equal(100)
            expect(result.stats.pendingPercent, 'stats.pendingPercent is not correct').to.be.equal(0)

            // validate suite
            expect(result.suites.suites.length, 'suites.suites was not populated').to.be.equal(1)
            expect(result.suites.suites[0].title, 'suites.suites[0].title is not correct').to.contain('A passing suite')
            expect(result.suites.suites[0].hasTests, 'suites.suites[0].hasTests is not correct').to.be.true
            expect(result.suites.suites[0].hasSuites, 'suites.suites[0].hasSuites is not correct').to.be.false
            expect(result.suites.suites[0].totalTests, 'suites.suites[0].totalTests is not correct').to.be.equal(1)
            expect(result.suites.suites[0].totalPasses, 'suites.suites[0].totalPasses is not correct').to.be.equal(1)
            expect(result.suites.suites[0].totalFailures, 'suites.suites[0].totalFailures is not correct').to.be.equal(0)
            expect(result.suites.suites[0].totalPending, 'suites.suites[0].totalPending is not correct').to.be.equal(0)
            expect(result.suites.suites[0].totalSkipped, 'suites.suites[0].totalSkipped is not correct').to.be.equal(0)
            expect(result.suites.suites[0].hasPasses, 'suites.suites[0].hasPasses is not correct').to.be.true
            expect(result.suites.suites[0].hasFailures, 'suites.suites[0].hasFailures is not correct').to.be.false
            expect(result.suites.suites[0].hasPending, 'suites.suites[0].hasPending is not correct').to.be.false
            expect(result.suites.suites[0].hasSkipped, 'suites.suites[0].hasSkipped is not correct').to.be.false
            expect(result.suites.suites[0].hasSkipped, 'suites.suites[0].hasSkipped is not correct').to.be.false
            expect(result.suites.suites[0].duration, 'suites.suites[0].duration is not correct').to.be.greaterThan(0)
            expect(result.suites.suites[0].uuid, 'suites.suites[0].uuid is not correct').to.not.be.empty
            expect(result.suites.suites[0].tests.length, 'suites.suites[0].tests is not populated').to.be.equal(1)
            expect(result.suites.suites[0].passes.length, 'suites.suites[0].passes is not populated').to.be.equal(1)
            
            // validate tests
            expect(result.suites.suites[0].tests[0].title, 'suites.suites[0].tests[0].title is not correct').to.equal('A passing test')
            expect(result.suites.suites[0].tests[0].fullTitle, 'suites.suites[0].tests[0].fullTitle is not correct').to.equal('A passing test')
            expect(result.suites.suites[0].tests[0].duration, 'suites.suites[0].tests[0].duration is not correct').to.be.greaterThan(0)
            expect(result.suites.suites[0].tests[0].pass, 'suites.suites[0].tests[0].pass is not correct').to.be.true
            expect(result.suites.suites[0].tests[0].fail, 'suites.suites[0].tests[0].fail is not correct').to.be.false
            expect(result.suites.suites[0].tests[0].pending, 'suites.suites[0].tests[0].pending is not correct').to.be.false
            expect(result.suites.suites[0].tests[0].skipped, 'suites.suites[0].tests[0].skipped is not correct').to.be.false
            expect(result.suites.suites[0].tests[0].uuid, 'suites.suites[0].tests[0].uuid is not correct').to.not.be.empty
            expect(result.suites.suites[0].tests[0].parentUUID, 'suites.suites[0].tests[0].parentUUID is not correct').to.equal(result.suites.suites[0].uuid)
            expect(result.suites.suites[0].tests[0].state, 'suites.suites[0].tests[0].state is not correct').to.equal('passed')

            // validate "all" arrays
            expect(result.allTests.length, 'results.allTests was not populated').to.be.equal(1)
            expect(result.allPasses.length, 'results.allPasses was not populated').to.be.equal(1)
        })
    })

    test('Detailed validation of a failing test', () => {
        return run(['failing']).then((results) => {
            expect(results).to.have.lengthOf(1)
            let result = results[0]

            // validate stats
            expect(result.stats.suites, 'stats.suites is not correct').to.be.equal(1)
            expect(result.stats.tests, 'stats.tests is not correct').to.be.equal(1)
            expect(result.stats.testsRegistered, 'stats.testsRegistered is not correct').to.be.equal(1)
            expect(result.stats.passes, 'stats.passes is not correct').to.be.equal(0)
            expect(result.stats.pending, 'stats.pending is not correct').to.be.equal(0)
            expect(result.stats.failures, 'stats.failures is not correct').to.be.equal(1)
            expect(result.stats.duration, 'stats.duration is not correct').to.be.greaterThan(0)
            expect(result.stats.passPercent, 'stats.passPercent is not correct').to.be.equal(0)
            expect(result.stats.pendingPercent, 'stats.pendingPercent is not correct').to.be.equal(0)

            // validate suite
            expect(result.suites.suites.length, 'suites.suites was not populated').to.be.equal(1)
            expect(result.suites.suites[0].title, 'suites.suites[0].title is not correct').to.contain('A failing suite')
            expect(result.suites.suites[0].hasTests, 'suites.suites[0].hasTests is not correct').to.be.true
            expect(result.suites.suites[0].hasSuites, 'suites.suites[0].hasSuites is not correct').to.be.false
            expect(result.suites.suites[0].totalTests, 'suites.suites[0].totalTests is not correct').to.be.equal(1)
            expect(result.suites.suites[0].totalPasses, 'suites.suites[0].totalPasses is not correct').to.be.equal(0)
            expect(result.suites.suites[0].totalFailures, 'suites.suites[0].totalFailures is not correct').to.be.equal(1)
            expect(result.suites.suites[0].totalPending, 'suites.suites[0].totalPending is not correct').to.be.equal(0)
            expect(result.suites.suites[0].totalSkipped, 'suites.suites[0].totalSkipped is not correct').to.be.equal(0)
            expect(result.suites.suites[0].hasPasses, 'suites.suites[0].hasPasses is not correct').to.be.false
            expect(result.suites.suites[0].hasFailures, 'suites.suites[0].hasFailures is not correct').to.be.true
            expect(result.suites.suites[0].hasPending, 'suites.suites[0].hasPending is not correct').to.be.false
            expect(result.suites.suites[0].hasSkipped, 'suites.suites[0].hasSkipped is not correct').to.be.false
            expect(result.suites.suites[0].hasSkipped, 'suites.suites[0].hasSkipped is not correct').to.be.false
            expect(result.suites.suites[0].duration, 'suites.suites[0].duration is not correct').to.be.greaterThan(0)
            expect(result.suites.suites[0].uuid, 'suites.suites[0].uuid is not correct').to.not.be.empty
            expect(result.suites.suites[0].tests, 'suites.suites[0].tests is populated').to.be.not.empty
            expect(result.suites.suites[0].failures.length, 'suites.suites[0].failures populated').to.be.equal(1)

            // validate tests
            expect(result.suites.suites[0].tests[0].title, 'suites.suites[0].tests[0].title is not correct').to.equal('A failing test')
            expect(result.suites.suites[0].tests[0].fullTitle, 'suites.suites[0].tests[0].fullTitle is not correct').to.equal('A failing test')
            expect(result.suites.suites[0].tests[0].duration, 'suites.suites[0].tests[0].duration is not correct').to.be.greaterThan(0)
            expect(result.suites.suites[0].tests[0].pass, 'suites.suites[0].tests[0].pass is not correct').to.be.false
            expect(result.suites.suites[0].tests[0].fail, 'suites.suites[0].tests[0].fail is not correct').to.be.true
            expect(result.suites.suites[0].tests[0].pending, 'suites.suites[0].tests[0].pending is not correct').to.be.false
            expect(result.suites.suites[0].tests[0].skipped, 'suites.suites[0].tests[0].skipped is not correct').to.be.false
            expect(result.suites.suites[0].tests[0].uuid, 'suites.suites[0].tests[0].uuid is not correct').to.not.be.empty
            expect(result.suites.suites[0].tests[0].parentUUID, 'suites.suites[0].tests[0].parentUUID is not correct').to.equal(result.suites.suites[0].uuid)
            expect(result.suites.suites[0].tests[0].state, 'suites.suites[0].tests[0].state is not correct').to.equal('failed')
            expect(result.suites.suites[0].tests[0].err.name, 'suites.suites[0].tests[0].err.name is not correct').to.equal('AssertionError')
            expect(result.suites.suites[0].tests[0].err.message, 'suites.suites[0].tests[0].err.message is not correct').to.equal("expected '1' to equal '2'")
            expect(result.suites.suites[0].tests[0].err.estack, 'suites.suites[0].tests[0].err.estack is empry').to.not.be.empty
            expect(result.suites.suites[0].tests[0].err.stack, 'suites.suites[0].tests[0].err.stack is empry').to.not.be.empty
            expect(result.suites.suites[0].tests[0].err.showDiff, 'suites.suites[0].tests[0].err.showDiff is not correct').to.be.true
            expect(result.suites.suites[0].tests[0].err.actual, 'suites.suites[0].tests[0].err.actual is not correct').to.be.equal('1')
            expect(result.suites.suites[0].tests[0].err.expected, 'suites.suites[0].tests[0].err.expected is not correct').to.be.equal('2')

            // validate "all" arrays
            expect(result.allTests.length, 'results.allTests was not populated').to.be.equal(1)
            expect(result.allFailures.length, 'results.allPasses was not populated').to.be.equal(1)
        })
    })

    test('Detailed validation of a skipped test', () => {
        return run(['skipped']).then((results) => {
            expect(results).to.have.lengthOf(1)
            let result = results[0]

            // validate stats
            expect(result.stats.suites, 'stats.suites is not correct').to.be.equal(1)
            expect(result.stats.tests, 'stats.tests is not correct').to.be.equal(1)
            expect(result.stats.testsRegistered, 'stats.testsRegistered is not correct').to.be.equal(1)
            expect(result.stats.passes, 'stats.passes is not correct').to.be.equal(0)
            expect(result.stats.pending, 'stats.pending is not correct').to.be.equal(1)
            expect(result.stats.failures, 'stats.failures is not correct').to.be.equal(0)
            expect(result.stats.passPercent, 'stats.passPercent is not correct').to.be.equal(0)
            expect(result.stats.pendingPercent, 'stats.pendingPercent is not correct').to.be.equal(100)

            // validate suite
            expect(result.suites.suites.length, 'suites.suites was not populated').to.be.equal(1)
            expect(result.suites.suites[0].title, 'suites.suites[0].title is not correct').to.contain('A skipped suite')
            expect(result.suites.suites[0].hasTests, 'suites.suites[0].hasTests is not correct').to.be.true
            expect(result.suites.suites[0].hasSuites, 'suites.suites[0].hasSuites is not correct').to.be.false
            expect(result.suites.suites[0].totalTests, 'suites.suites[0].totalTests is not correct').to.be.equal(1)
            expect(result.suites.suites[0].totalPasses, 'suites.suites[0].totalPasses is not correct').to.be.equal(0)
            expect(result.suites.suites[0].totalFailures, 'suites.suites[0].totalFailures is not correct').to.be.equal(0)
            expect(result.suites.suites[0].totalPending, 'suites.suites[0].totalPending is not correct').to.be.equal(1)
            expect(result.suites.suites[0].totalSkipped, 'suites.suites[0].totalSkipped is not correct').to.be.equal(0)
            expect(result.suites.suites[0].hasPasses, 'suites.suites[0].hasPasses is not correct').to.be.false
            expect(result.suites.suites[0].hasFailures, 'suites.suites[0].hasFailures is not correct').to.be.false
            expect(result.suites.suites[0].hasPending, 'suites.suites[0].hasPending is not correct').to.be.true
            expect(result.suites.suites[0].hasSkipped, 'suites.suites[0].hasSkipped is not correct').to.be.false
            expect(result.suites.suites[0].hasSkipped, 'suites.suites[0].hasSkipped is not correct').to.be.false
            expect(result.suites.suites[0].uuid, 'suites.suites[0].uuid is not correct').to.not.be.empty
            expect(result.suites.suites[0].tests.length, 'suites.suites[0].tests is not populated').to.be.equal(1)

             // validate tests
            expect(result.suites.suites[0].tests[0].title, 'suites.suites[0].tests[0].title is not correct').to.equal('A skipped test')
            expect(result.suites.suites[0].tests[0].fullTitle, 'suites.suites[0].tests[0].fullTitle is not correct').to.equal('A skipped test')
            expect(result.suites.suites[0].tests[0].pass, 'suites.suites[0].tests[0].pass is not correct').to.be.false
            expect(result.suites.suites[0].tests[0].fail, 'suites.suites[0].tests[0].fail is not correct').to.be.false
            expect(result.suites.suites[0].tests[0].pending, 'suites.suites[0].tests[0].pending is not correct').to.be.true
            expect(result.suites.suites[0].tests[0].skipped, 'suites.suites[0].tests[0].skipped is not correct').to.be.false
            expect(result.suites.suites[0].tests[0].uuid, 'suites.suites[0].tests[0].uuid is not correct').to.not.be.empty
            expect(result.suites.suites[0].tests[0].parentUUID, 'suites.suites[0].tests[0].parentUUID is not correct').to.equal(result.suites.suites[0].uuid)
            expect(result.suites.suites[0].tests[0].state, 'suites.suites[0].tests[0].state is not correct').to.be.undefined
            expect(result.suites.suites[0].pending.length, 'suites.suites[0].pending not populated').to.be.equal(1)

            // validate "all" arrays
            expect(result.allTests.length, 'results.allTests was not populated').to.be.equal(1)
            expect(result.allPending.length, 'results.allPasses was not populated').to.be.equal(1)
        })
    })

    test.skip('Should handle parallel suites', () => {
        return run(['passing', 'failing']).then((results) => {
            expect(results).to.have.lengthOf(1)
            let result = results[0]

            expect(result.stats.suites, 'stats.suites is not correct').to.be.equal(2)
            expect(result.stats.tests, 'stats.tests is not correct').to.be.equal(2)
            expect(result.stats.testsRegistered, 'stats.testsRegistered is not correct').to.be.equal(2)
            expect(result.stats.passes, 'stats.passes is not correct').to.be.equal(1)
            expect(result.stats.pending, 'stats.pending is not correct').to.be.equal(0)
            expect(result.stats.failures, 'stats.failures is not correct').to.be.equal(1)
            expect(result.stats.duration, 'stats.duration is not correct').to.be.greaterThan(0)
            expect(result.stats.passPercent, 'stats.passPercent is not correct').to.be.equal(50)
            expect(result.stats.pendingPercent, 'stats.pendingPercent is not correct').to.be.equal(0)
            expect(result.suites.suites.length, 'suites.suites is not correct').to.be.equal(2)
            expect(result.suites.suites[0].title, 'suites.suites might be duplicated').to.not.be.equal(result.suites.suites[1].title)
        })
    })

    test.skip('Should handle multiple results', () => {
        return run(['multiresults']).then((results) => {
            expect(results).to.have.lengthOf(1)
            let result = results[0]

            expect(result.stats.suites, 'stats.suites is not correct').to.be.equal(1)
            expect(result.stats.tests, 'stats.tests is not correct').to.be.equal(5)
            expect(result.stats.testsRegistered, 'stats.testsRegistered is not correct').to.be.equal(5)
            expect(result.stats.passes, 'stats.passes is not correct').to.be.equal(3)
            expect(result.stats.pending, 'stats.pending is not correct').to.be.equal(0)
            expect(result.stats.failures, 'stats.failures is not correct').to.be.equal(2)
            expect(result.stats.duration, 'stats.duration is not correct').to.be.greaterThan(0)
            expect(result.stats.passPercent, 'stats.passPercent is not correct').to.be.equal(60)
            expect(result.stats.pendingPercent, 'stats.pendingPercent is not correct').to.be.equal(0)
            expect(result.suites.suites.length, 'suites.suites is not correct').to.be.equal(1)
            expect(result.suites.suites[0].tests.length, 'suites.suites.tests is not correct').to.be.equal(5)
            expect(result.suites.suites[0].passes.length, 'suites.suites.passes is not correct').to.be.equal(3)
            expect(result.suites.suites[0].failures.length, 'suites.suites.failures is not correct').to.be.equal(2)
            expect(result.suites.suites[0].totalTests, 'suites.suites.totalTests is not correct').to.be.equal(5)
            expect(result.suites.suites[0].totalPasses, 'suites.suites.totalPasses is not correct').to.be.equal(3)
            expect(result.suites.suites[0].totalFailures, 'suites.suites.totalFailures is not correct').to.be.equal(2)
            expect(result.suites.suites[0].hasPasses, 'suites.suites.hasPasses is not correct').to.be.true
            expect(result.suites.suites[0].hasFailures, 'suites.suites.hasFailures is not correct').to.be.true
        })
    })

})
