import { expect } from 'chai'
import <%= appname %> from '../src'

describe('<%= appname %>', function () {
  it('should be defined', function () {
    expect(<%= appname %>).to.not.be.undefined
  })
})
