import {expect} from 'chai';

describe('Template Literals', () => {
  it.skip('should support string interpolation', () => {
    const person = {
      name: 'Kent C. Dodds',
      friends: [
        'Brooke Dodds',
        'Matt Zabriskie',
        'Aaron Frost',
        'Dave Geddes',
        'Joe Eames',
        'Ryan Florence'
      ]
    };

    const personsFriends = ``;
    expect(personsFriends).to.equal(
      'Kent C. Dodds has 6 friends: Brooke Dodds, Matt Zabriskie, Aaron Frost, Dave Geddes, Joe Eames, Ryan Florence'
    );
  });

  it.skip(`should support multi-line strings`, () => {
    // no concat !
    const multiLine = ``;
    expect(multiLine).to.equal('\n      How cool\n      is this!?\n    ');
  });

  it.skip(`should support string escaping`, () => {
    expect(``).to.equal('Hi\nthere!');
    expect(``).to.equal('This is `escaped` backtics');
  });

});
