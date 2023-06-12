function solution(num_list, n) {
    let answer = []
    for(i=0;i<num_list.length/n;i++){
        let inner = []
        for(j=i*n;j<(i+1)*n;j++){
            inner.push(num_list[j])
        }
        answer.push(inner)
    }
    return answer
}