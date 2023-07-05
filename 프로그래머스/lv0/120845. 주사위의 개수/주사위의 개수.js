function solution(box, n) {
    let answer = 1
    for(i=0;i<3;i++){
        answer = answer * Math.floor(box[i]/n)
    }
    return answer
}