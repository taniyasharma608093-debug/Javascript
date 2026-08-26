//Immediately Invoked Function Expression (IIFE)

(function chai() {        //named iife          //global scope k pollution se bchane k liye 
    console.log(`DB CONNECTED`);
})();                               //without semicolon , next function will generate error

// (function definition)(execution call)

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('taniya');