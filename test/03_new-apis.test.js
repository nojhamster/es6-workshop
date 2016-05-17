import {expect} from 'chai';

describe(`String`, () => {
  it.skip(`should be easier to determine whether a string includes another`, () => {
    const sentence = 'It was the best of times. It was the worst of times';

    /* do something here */

    expect(result).to.be.true;
  });

  it.skip(`should be easier to repeat a string`, () => {
    const repeated = 'abc123';

    /* do something here */

    expect(result).to.equal('abc123abc123abc123abc123');
  });
});

describe(`Array`, () => {
  it.skip(`should be able to take an array-like object and convert it into an array`, () => {
    var obj = {length: 3, 0: 'a', 1: 'b', 2: 'c'};

    /* do something here */

    expect(result).to.deep.equal(['a', 'b', 'c']);
  });

  it.skip(`should be easier to fill an array with values`, () => {
    const originalArray = new Array(5);

    /* do something here */

    expect(result).to.deep.equal([ , 3, 3, 3, 3]);
  });
});

describe(`Object`, () => {
  it.skip(`should be easy to copy properties from one object to another`, () => {
    const source1 = {
      a: {
        b: 'c',
        m: [1, 2, 3]
      }
    };
    const source2 = {
      d: false,
      z: 34
    };
    const source3 = {
      z: 42,
      p: ['a', 'b', 'c']
    };

    const target = {
      a: {
        q: 'r',
        m: [4, 5, 6],
        s: {
          t: 3
        }
      },
      d: true,
      p: ['x', 'y', 'z']
    };

    // merge the sources into the target and assign the result to `result`

    expect(result).to.deep.equal({
      a: {
        b: 'c',
        m: [1, 2, 3]
      },
      d: false,
      z: 42,
      p: ['a', 'b', 'c']
    });

    // this is only here to indicate that the assignment is not deep
    expect(result).to.not.deep.equal({
      a: {
        b: 'c',
        m: [1, 2, 3],
        q: 'r',
        s: {
          t: 3
        }
      },
      d: false,
      z: 42,
      p: ['a', 'b', 'c']
    })
  });
});
