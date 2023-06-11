function solution(hp) {
    // hp = 5a + 3b + c
    // a가 많을수록 전체 개미 숫자가 준다. (최적화)
    // c= ((hp%5)%3) //hp를 5로 나누고 그 나머지를 3으로 나눈 것의 나머지
    // a = Math.floor(hp/5) // hp를 5로 나눈 것에서 몫
    // b = Math.floor((hp%5)/3) // 5로 나눈 것의 나머지를 3으로 나눌 때 몫
    return ((hp%5)%3) + Math.floor(hp/5) + Math.floor((hp%5)/3) 
    
}