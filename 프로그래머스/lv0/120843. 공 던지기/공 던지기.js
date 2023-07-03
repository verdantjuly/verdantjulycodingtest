function solution(numbers, k) {
        if (k==1){
            return 1
        }else if((k*2-1)%numbers.length==0){
            return numbers.length
        }else{
            return (k*2-1)%numbers.length
        }
        
}