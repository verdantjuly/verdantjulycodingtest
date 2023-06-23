function solution(my_string) {
    let vowels = ["a","e","i","o","u"]
    return  my_string.split("").filter(nonvowel => vowels.includes(nonvowel)  == false ).join("")
}