function solution(my_string) {
    const myarray = my_string.split("")
    const Upperarray = my_string.toUpperCase().split("")
    const result = myarray.map(my => {
        const changedarray = Upperarray.map(upper => {
            if(my === upper){
                return upper.toLowerCase()
            }else if(my !== upper){ return upper}
        })
        return changedarray[myarray.indexOf(my)]
    })
    return result.join("")
}