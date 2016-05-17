import {expect} from 'chai';

describe('Block Scoped Variables', () => {

  it.skip('can be used in place of `var`', () => {

    /* do something here */

    expect(bandName).to.equal('Queen');
    expect(isBestBand).to.be.true;
  });


  it.skip('can modify the value of a `let` variable', () => {

    let releaseName = 'ES6';

    /* do something here */

    expect(releaseName).to.equal('ES2015');
  });

  it.skip('cannot modify the value of a `const` variable', () => {

    var releaseName = 'ES6';

    // This doesn't even transpile, so we can't actually test this...
    // once you've changed the `var` above to `const`, comment out the line below
    releaseName = 'ES2015';
    expect(releaseName).to.equal('ES6');
  });


  it.skip('is trapped inside of an `if` statement', () => {

    if (true) {
      var b = 1;
    }

    expect(()=> console.log(b)).to.throw('b is not defined');
  });


  it.skip('prevents loop counters from hoisting', () => {

    function doLoop() {
      for (var i = 0; i < 10; i++) {

      }
      return i;
    }

    expect(doLoop).to.throw('i is not defined');
  });


  it.skip('means that we can start using block statements', () => {

    {
      var d = 2;
    }

    expect(()=> console.log('d', d)).to.throw('d is not defined');
  });

});
