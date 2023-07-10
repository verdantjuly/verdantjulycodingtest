function solution(num, k) {
    // num을 문자열로 만들어 쪼개기 
    // 문자열로 바꾼 k의 인덱스 찾기
    // 인덱스가 존재하면 인덱스를, 아닌 경우에는 -1을 리턴하기
    
    const index = String(num).split("").indexOf(String(k))
    if(index !== -1){return index +1}
    return -1
}