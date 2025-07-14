//Immediately Invoked Function Expressions (IIFE)

(function chai(){   //named iife
    console.log(`DB CONNECTED`);
})();

//global scope ke  pollution se problem  hota hai kaii bar to global scope me jo variables hai ya jo declaration hai usko hatane ke liye iife use karte hai

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// })()

( (name) => {   //simple iife
    console.log(`DB CONNECTED TWO ${name}`);
})("himanshu")