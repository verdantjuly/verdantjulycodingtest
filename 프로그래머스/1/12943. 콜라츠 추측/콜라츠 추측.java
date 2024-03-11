class Solution {
    public int solution(int num) {
        long result = num;
        if(num == 1){
                return 0;
            };
        for(int i = 0; i < 500; i++){
             result = result % 2 == 0 ? result / 2 :  result * 3 + 1;
          
            if(result == 1){
                return  i + 1;
            }
            
           
        }
        return -1;
    }
}