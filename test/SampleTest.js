//at command line run npm test, 
//it will read your script section of package json 
//and run whatever test script you specify
process.env.NODE_ENV='testing';
var sinon=require('sinon'); //used for stubs and spying
require('mocha');
var assert=require('assert');
describe('Array' ,function () 
{
    beforeEach(function(){
    console.log('before each Array test');
    });

    describe('#array test', function() {
       it('should return valid length', function(){
          
           var spy=sinon.spy(console,"log"); //spy on console.log
           console.log('asserting');
           assert.equal([1,2,3].length,3);
          assert.equal(spy.called,true); //assert that console.log was called
           
       }) ;
    });
    });
    
console.log('running tests');