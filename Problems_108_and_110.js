// Problem 108:
// In the following equation x, y, and n are positive integers.
//  1/x + 1/y = 1/n
// For n=4 there are exactly three distinct solutions:
//  1/5 +1/20 = 1/4
//  1/6 +1/12 = 1/4
//  1/8 + 1/8 = 1/4
// What is the least value of n for which the number of distinct solutions exceeds one-thousand (in general, exceeds d)?
 
 


// method to count number of divisors of input integer n
const divisorCount = (n) => {
    let count = 0;
    for (i=1; i< n**0.5; i++){
        if (n % i === 0){
            count ++;
        }
    }
    count *= 2;
    if (n**0.5 % 1 === 0){
        count++;
    }
    return count;
}

const divisorCount2 = (n) => {
    let count = 0;
    for (i = 1; i <= n; i++) {
        if (n % i === 0) {
        count++;
        }
    }
  return count;
}


// method to count number of pairs (a,b) such that a*b = n for input integer n
const pairwiseFactorisations = (n) => {
    let count = 0;
    for (i=1; i< n**0.5; i++){
        if (n % i === 0){
            count ++;
        }
    }
    if (n**0.5 % 1 === 0){
        count++;
    }
    return count;
}

// console.log(pairwiseFactorisations(24**2));



const Problem108 = (d) => {
    // solutions (x,y) to 1/x + 1/y = 1/n for given n equivalent to finding numbers a,b 
    // such that a*b = n**2;

    let finished = false;
    let iterate = 2;
    while (!finished){
        if (pairwiseFactorisations(iterate**2) > d){
            finished = true;
        }
        else{
            iterate ++;
        }
    }
    return iterate;
}

// console.log(Problem108(1000));



const isPrime = (n) => {
    if (n===2 || n===3){
        return true;
    }
    if (n<=1 || n%2===0 || n%3===0){
        return false;
    }
    for (i===5; i<= n**0.5; i+=6){
        if (n%i===0 || n%(i+2)===0){
            return false;
        }
    }
    return true;
}