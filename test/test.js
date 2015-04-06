/* eslint-env mocha */
import {expect} from 'chai'
import {match, wordify, sort} from '..'

describe('fuz', () => {
  it('matches strings', () => {
    expect(match('test', 'test')).to.not.be.null
    expect(match('test', 'testzz')).to.not.be.null
    expect(match('test', 'zztest')).to.not.be.null
    expect(match('test', 'zztestzz')).to.not.be.null
    expect(match('test', 'zztzezsztzz')).to.not.be.null
    expect(match('test', 'zztesztzz')).to.not.be.null
    expect(match('test', 'zzteszzz')).to.be.null
    expect(match('test', 'tes')).to.be.null
    expect(match('test', '')).to.be.null
  })
})
