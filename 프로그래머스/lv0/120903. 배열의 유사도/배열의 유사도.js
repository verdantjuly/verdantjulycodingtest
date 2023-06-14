function solution(s1, s2) {
    let countarray = []
    for(i=0;i<s1.length;i++){
        if (s2.includes(s1[i])){
            countarray.push(s1[i])
        }
    }
    for(j=0;j<s2.length;j++){
        if (s1.includes(s2[j])&&!countarray.includes(s2[j])){
            countarray.push(s1[j])
        }
    }
    return countarray.length
}