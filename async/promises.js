/**
 * So after you know the concepts behind callbacks, you will quickly see a problem
 * Stacking callbacks is a nightmare.
 * 
 * Because with one or 2 it may be fine, but anymore and it will be hard to tell which callback a code is part of
 * Also custom error handling for each function is not fun
 * 
 * That is where promise chaining and catch statements are used
 */

// This is not fun to debug
function scaryCallback(){
    function getName(userId, cb){
        setTimeout(() => {
            const name = 'Alice' + userId;
            cb(null, name);
        }, 3000);
    }
    getName('1212', function(err, name){
        if(err){
            console.log('There is an error');
            return;
        }
        getName('hehe', function(e, n2){
            if(e){
                console.log('There is an error');
                return;
            }
            console.log(`${name} ${n2}`);
        });
    });
}

const promises = {
    /**
     * This is to show the general layout of a promise
     */
    ex1(){
        // When declaring a new Promise, it is done as initializing a new object
        let p = new Promise(function(resolve, reject){
            // Here the resolve and reject are built in functions for promises
            // This is because a promise resolves/'returns' when this function is called, just like a callback
            // Same with rejects, the promise 'returns' but an error is called in the promise chain
            resolve('a');
        })
        .then(
            function(resolvedValue){
                // So we can see here that the value passed when resolving is then passed in the chain as a var
                // Note you should only resolve 1 value
                console.log(resolvedValue);
            }
        );
    },
    // Same as ex1, but with arrow, the way we usually do it
    ex1a(){
        let p = new Promise((resolve, reject) => {
            resolve('a');
        })
        .then(
            function(resolvedValue){
                console.log(resolvedValue);
            }
        );
    },
    /**
     * Same example this time with async
     */
    ex2(){
        let p = new Promise(function(resolve, reject){
            setTimeout(() => {
                
            }, 3000);
        })
        .then(
            function(resolvedValue){
                console.log(resolvedValue);
            }
        );
    }
};

// Run exmaples below
// scaryCallback();
promises.ex1();