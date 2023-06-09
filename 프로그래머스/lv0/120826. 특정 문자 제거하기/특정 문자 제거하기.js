function solution(my_string, letter) {
    
    while( my_string.includes(letter) )
    {
        my_string = my_string.replace(letter,"")
    } 
     return my_string
}