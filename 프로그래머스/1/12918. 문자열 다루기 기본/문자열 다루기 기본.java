import java.util.*;

class Solution {
    public boolean solution(String s) {
        String[] numbers = {"0","1","2","3","4","5","6","7","8","9"};
        String[] array = s.split("");
        
        if (s.length() == 4 || s.length() == 6){
        
        for (int i=0; i<array.length; i++){
            if(!Arrays.asList(numbers).contains(array[i])){
                return false;
            }
        }
        return true;
        } else {
            return false;
        }
       
        
    }
}