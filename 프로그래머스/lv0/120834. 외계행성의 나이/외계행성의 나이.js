function solution(age) {
    let spaceage = ""
    spaceagearray = ['a','b','c','d','e','f','g','h','i','j']
    for(i=0;i<(age.toString()).length;i++){
    spaceage = spaceage + spaceagearray[(age.toString())[i]]
    }
    return spaceage
}