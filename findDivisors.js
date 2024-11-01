// Finding the divisors for the number.
function findDivisors(n){
    let Divisors = [];
    let SqrtN = Math.sqrt(n);
    
    for (let i=1; i<= SqrtN; i++){
        if(n% i ===0){
            Divisors.push(i);
       if(i !== n/i){
            Divisors.push(n/i);
        }
        }
    }
    
    return Divisors;    
}

let number = 36;
let Divisors = findDivisors(number);
console.log("Divisors of " + number + ": are");
for (let Divisor of Divisors){
    console.log(Divisor + " ");
    }
