function solution(s) {
    let array = s.split(" ")
    let max = array[0]
    let min = array[0]
    for(i=1;i<array.length;i++){
       if(Number(max)<Number(array[i])){
           max = array[i]
       }
        if(Number(min)>Number(array[i])){
            min = array[i]
        }
    }
    return min + " " + max
}