function solution(my_string) {
    return my_string.split("").filter( num => num*1 == num).map(num => Number(num)).reduce((acc,curr)=>acc+curr,0)
}