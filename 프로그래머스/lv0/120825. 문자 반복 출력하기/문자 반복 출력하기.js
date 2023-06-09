function solution(my_string, n) {
    let answer = ""
    for(i=0;i<my_string.length;i++){
       answer = answer + (my_string[i]).repeat(n)
    }
    return answer
}