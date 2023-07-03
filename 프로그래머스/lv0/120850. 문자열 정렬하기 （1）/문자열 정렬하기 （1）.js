function solution(my_string) {
    // numbers 배열 뽑기
    let numbers = []
    for(i=0;i<my_string.length;i++){
        if(Number(my_string[i])||Number(my_string[i])==0){
            numbers.push(Number(my_string[i])) 
        }
    }
    
    //버블 정렬
    for (let j = 0;j < numbers.length; j++) {
        let swap;
        for (let k = 0; k < numbers.length - 1 - j; k++) {
            if (numbers[k] > numbers[k + 1]) {
                swap = numbers[k];
                numbers[k] = numbers[k + 1];
                numbers[k + 1] = swap;
            }
        }
        if (!swap) {
          break;
        }
    }
    return numbers
}