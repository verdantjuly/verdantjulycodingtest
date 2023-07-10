function solution(numbers) {
    let allNum = []
    for (i=0;i<numbers.length;i++){
        for (j=0;j<numbers.length;j++){
            if(i!==j){
             allNum.push(numbers[i] * numbers[j])   
            }
        }
    }
    return allNum.sort((prev, next) =>next - prev)[0]
}