import jsdom from 'jsdom'
import chai from 'chai'
import Enzyme from 'enzyme'
import plugin from '../../src'
const { JSDOM } = jsdom

global.isEnzyme3 = (process.env.ENZYME_VERSION !== '^2')
if (isEnzyme3) {
  const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')
  Enzyme.configure({ adapter: new Adapter() })
}

const dom = new JSDOM('<!doctype html><html><body></body></html>')
global.window = dom.window
global.document = global.window.document
global.navigator = global.window.navigator

global.React = require('react')
global.expect = require('chai').expect
global.createTest = require('./createTest').default

chai.use(plugin())
