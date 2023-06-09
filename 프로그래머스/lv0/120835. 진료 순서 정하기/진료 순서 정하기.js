function solution(emergency) {
    var answer = [];
    for(i=0;i<emergency.length;i++){
        
    // doctor 라는 배열에 emergency 복사
    let doctor = emergency.map( a=>(a))
    
    // doctor : 진료를 봐야 하는 순서로 sort 된 배열  // 100 98 72 ...
    doctor.sort((a,b)=>b-a)   

    // order : emergency[i]의 진료 순서를 담는다
    let order = doctor.indexOf(emergency[i]) +1
    
    // answer : return할 배열 : 진료 순서를 push 해 준다.
    // 응급도에 비례하여 결정된 진료 순서가 emergency에 나열된 순서대로 들어간다.
    answer.push(order)
    }
    return answer;
}