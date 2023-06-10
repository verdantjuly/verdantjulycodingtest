function solution(n) {
    let count = [];
    // a * b = n
    // n%a = 0
    for(i=1;i<=n;i++){
        if(n%i == 0 && !count.includes(i)){ count.push(i)}
    }
       return count.length;}