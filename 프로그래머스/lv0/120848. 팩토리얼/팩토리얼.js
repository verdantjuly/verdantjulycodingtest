function solution(n) {
    let mul = 1
    for(i=1;i<n+1;i++){
        mul = mul * i
        if(n < mul) {return i-1} 
        else if (n==mul){return i}
    }
    
    
        
}