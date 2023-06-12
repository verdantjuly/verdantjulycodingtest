function solution(arr) {
    let X = []
    for(i=0;i<arr.length;i++){
        for(j=0; j<arr[i]; j++){
            X.push(arr[i]) 
        }
    }
    return X
}