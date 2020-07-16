/**
 * In general, callbacks are used when a function cannot immediately return a value.
 * This can be anything from an API call to a db call or anything that does not resolve immediately.
 * For this example, all you need to know is that setTimeout(function, time) calls the function after a set amount of time.
 */

const callbacks = {
    /**
     * This example is too show the use case if we do not use callbacks with async functions
     * I am called first is logged first because the setTimeout function has not executed yet
     */
    ex1(){
        setTimeout(() => {
            console.log('I am called second');
        }, 3000);
        console.log('I am called first because ');
    },
    /**
     * Now you would solve this issue with the outer console statement running second with a callback
     * 
     * We can see that once the timer runs and executes the function, the inner function is then executed in order
     */
    ex2(){
        // Callback function
        let cb = function(){
            console.log('I am called first because ');
        };
        // Main driver code
        setTimeout(() => {
            console.log('I am called second');
            cb();
        }, 3000);
    },
    /**
     * This this leads us to the reason as to why we use callbacks
     * 
     * This is because it allows us to write the behaviour of our async function given a callback function so things run in order
     */
    ex3(){
        // Say you are making a function to query name from your db
        function getName(cb){
            // Time it takes to get name
            setTimeout(() => {
                // Got the name
                const name = 'Alice';
                cb(null, name);
                // Error code below
                // cb('No name', null);
            }, 3000);
        }
        // Now here we can write our custom callbacks to do something when the data is returned
        getName(function(err, name){
            if(err){
                console.log('There is an error');
                return;
            }
            console.log(`Hello ${name}`);
        });
    }
};

// Run exmaples below
// callbacks.ex1();
// callbacks.ex2();
// callbacks.ex3();