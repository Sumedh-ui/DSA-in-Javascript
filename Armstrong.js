// To Check wheather the number is a armstrong number or not 

function isArmStrong(num){
    const k = String(num).length
    let sum = 0;
    let n = num;
    
    while (n>0){
        const ld = n % 10;
        sum += Math.pow(ld,k)
    n = Math.floor(n/10);
    }
    return sum === num ? true : false;
}

function main(){
    const number  = 153;
    if(isArmStrong(number)){
        console.log(number + " Is an Armstrong Number")
    }
else{
console.log(number +  " Is not an Armstrong Number")
}
}

main();
