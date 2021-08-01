"use strict"

// Task 1-in tercumesini anlaya bilmedim deye yaza bilmedim teessufki((


// Task 2 - fibonacci numbers

function fibonacci(n){
    let a = 0;
    let b = 1;
    let result = 0;
    if(n==0){
        result = 0;
    }
    else if(n==1){
        result = b;
    }
    else{
        for(var i = 0; i < n - 1; i++) {
            result = a + b;
            a = b; 
            b = result; 
         }
    }

    alert(result);
    
}

let input = prompt("Necenci fibonacci reqemini gormek isteyirsiz?");
fibonacci(input);
