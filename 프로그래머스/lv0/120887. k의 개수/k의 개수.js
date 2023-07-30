function solution(i, j, k) {
    let count = 0
    for(l=i;l<j+1;l++){
        count = count + l.toString().split("").filter(item=>item==k).length
    }
    return count
}