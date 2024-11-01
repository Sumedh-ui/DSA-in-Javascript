// Checking the number is a prime no or not 
function checkPrime(n){
    let cnt = 0;
    for (let i=1; i<= Math.sqrt(n); i++){
        if(n%i === 0){
            cnt = cnt + 1;
              if(n/i !==i){
                  cnt = cnt + 1;
              }
        }
    }
    
    if(cnt === 2){
        return true;
    }
    else{
        return false;
    }
}

let n = 1483
let isPrime = checkPrime(n)
if(isPrime){
    console.log(n + ' is a Prime Number')
}
else {
    console.log(n + ' is not a Prime Number')
}
