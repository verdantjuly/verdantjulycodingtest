function solution(my_string, num1, num2) {
    const temp = my_string[num1]
    let array = my_string.split("")
    array[num1] = array[num2]
    array[num2] = temp
    return array.join("")
    
}