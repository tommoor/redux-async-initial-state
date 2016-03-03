import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

chai.config.includeStack = true;

global.expect = chai.expect;
global.spy = chai.spy;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;
