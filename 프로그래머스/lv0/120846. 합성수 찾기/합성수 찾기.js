function solution(n) {
    let count = 0
    for(i=1;i<=n;i++){    
        let numbers = []
        for(j=1;j<=n;j++){
            if(i%j==0){numbers.push(j)}
        }
        if(numbers.length>2){count = count +1}     
    }
    return count
}