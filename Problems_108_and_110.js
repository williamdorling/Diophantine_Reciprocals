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


