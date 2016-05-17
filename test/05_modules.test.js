// WRITE YOUR IMPORT STATEMENTS HERE
import Mathy from '../common/Mathy';




import {expect} from 'chai';

describe('ES6 Modules', () => {
  it.skip('can import Mathy', () => {

    // I DID THIS ONE FOR YOU!
    expect(Mathy.sqrt).to.exist;
    expect(Mathy.square).to.exist;
    expect(Mathy.diag).to.exist;
  });


  it.skip('Can alias the import name', () => {

    // Import `myMathy` to ge these tests to pass.
    // NOTE: All import statements have to be done at the top of the file

    expect(myMathy).to.exist;
    expect(myMathy.sqrt).to.equal(Mathy.sqrt);
    expect(myMathy.square).to.equal(Mathy.square);
    expect(myMathy.diag).to.equal(Mathy.diag);
  });

  it.skip('can destructure the import, to only retain pieces of the import', () => {

    // Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
    // NOTE: All import statements have to be done at the top of the file

    expect(mySqrt).to.exist;
    expect(mySquare).to.exist;
    expect(mySqrt).to.equal(Mathy.sqrt);
    expect(mySquare).to.equal(Mathy.square);
  });

  it.skip('can import from my node_modules', () => {

    // import `lodash`
    // NOTE: All import statements have to be done at the top of the file

    expect(_).to.exist;

  });
});
