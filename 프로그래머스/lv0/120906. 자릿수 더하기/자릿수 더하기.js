function solution(n) {
    let answer = 0;
    let numarray = n.toString().split("")
    for(i=0;i<numarray.length;i++){
        answer = answer + parseInt(numarray[i])
    }
    return answer
    
}