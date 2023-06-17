function solution(n, t) {
    let answer = n
    for(i=1;i<=t;i=i+1){
        answer = answer*2
    }
    return answer
}