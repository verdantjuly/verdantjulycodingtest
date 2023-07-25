function solution(my_string) {
    let array = my_string.split("")
    let filtered = my_string.split("")
    let newarray = []
    for(i=0;i<array.length;i++){
        const same = filtered.filter(item => item == array[i]).length
        if(same>1){
            newarray.push(array[i])
            filtered = filtered.filter(item=> item !== array[i])
        }else if (same == 1){
            newarray.push(array[i])
        }
        
    }
    return newarray.join("")
}