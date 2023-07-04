function solution(numbers, direction) {
    if(direction == "right"){
        const last = numbers[numbers.length-1]
        for(i=numbers.length-1;i>=0;i--){
            numbers[i]=numbers[i-1]
        }
        numbers[0] = last
        return numbers
    } else if (direction == "left"){
        const first = numbers[0]
        for(i=1;i<numbers.length;i++){
            numbers[i-1]=numbers[i]
        }
        numbers[numbers.length-1] = first
        return numbers
    }
}