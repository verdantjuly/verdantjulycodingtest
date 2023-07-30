function solution(before, after) {
    const sortBefore = before.split("").sort().join("")
    const sortAfter = after.split("").sort().join("")
    const result =  sortBefore == sortAfter ? 1 : 0
    return result 
}