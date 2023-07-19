function solution(quiz) {
    let answer 
    let result =[]
    quiz.map(
        line =>{
    const array = line.split(" ")
    if(array[1]=="+"){
        answer = Number(array[0]) + Number(array[2])
        if(answer==array[4]){
            result.push("O")
        } else{
            result.push("X") 
        }
    }
            if(array[1]=="-"){
        answer = Number(array[0]) - Number(array[2])
        if(answer==array[4]){
            result.push("O")
        } else{
            result.push("X") 
        }
    }
    })
    return result
}