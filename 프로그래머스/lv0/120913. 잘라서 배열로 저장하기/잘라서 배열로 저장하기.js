function solution(my_str, n) {
    let array = []
    for(i=0; i<my_str.length; i=i+n){
        let slicedstr =my_str.slice(i,i+n)
        array.push(slicedstr)}
    return array
    
}