var chai = require('chai');
var expect = chai.expect;
var englishInt = require(__dirname + '/../english_int_v1.js');

describe('the english iniger problem', function() {

  it('should print one with the input of 1', function() {
    expect(englishInt(1)).to.eql('one');
  });

  it('should print one hundred thirty four with an input of 134', function() {
    expect(englishInt(134)).to.eql('one hundred thirty four');
  });

  //edge case
  it('should print tweleve with an input of 12', function() {
    expect(englishInt(12)).to.eql('tweleve');
  });
});
