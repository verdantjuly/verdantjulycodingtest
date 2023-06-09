function solution(num_list) {
    var answer = [];
    let oddnum =[]
    let evennum= []
    for(i=0;i<num_list.length;i++){
        if(num_list[i]%2 == 1){
            oddnum.push(num_list[i])
        }else{evennum.push(num_list[i])}
    }
    answer.push(evennum.length)
    answer.push(oddnum.length)

    return answer;
}