function solution(num_list) {
    const totalSum = num_list.reduce((a,b)=> a + b)
    return  num_list.reduce((a,b)=> a * b) < totalSum * totalSum ? 1: 0
}