function solution(array, n) {
    array = array.sort()
    let close = 0
    let result = 0
    close = Math.abs(array[0]-n)
    result = array[0]
    for(i=1;i<array.length;i++){  
        if(close>Math.abs(array[i]-n)){
            close = Math.abs(array[i]-n)
            result = array[i]
        }
    }
    return result
}