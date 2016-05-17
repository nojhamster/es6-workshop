import {expect} from 'chai';

describe('MAPS', () => {

  it.skip('has a set method', ()=> {

    // do something here


    expect(myMap.get('name')).to.equal('Aaron');

  });

  it.skip('can use objects as a key', ()=> {

    let user = {name: 'Aaron'};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'};

    // do something here


    expect(myMap.has(user)).to.be.true;
    expect(myMap.get(user)).to.equal(value);

  });

  it.skip(`doesn't coerce keys`, ()=> {

    let myMap = new Map();
    myMap.set(1, 'Aaron');
    expect(myMap.get('1')).to.equal(/*ENTER YOUR GUESS HERE*/);
    myMap.set('1', 'Aaron');
    expect(myMap.get('1')).to.equal(/*ENTER YOUR GUESS HERE*/);

  });

});
