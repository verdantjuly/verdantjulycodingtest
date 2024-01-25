function solution(s) {
    let numbers = s.split(" ")
    let total = 0
    for (i=0; i< numbers.length; i++){
        if(numbers[i]=="Z"){
            total = total - Number(numbers[i-1])
        } else {
            total = total + Number(numbers[i])
        }
    }
    return total
}