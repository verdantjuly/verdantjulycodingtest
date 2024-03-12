import java.util.*;

class Solution {
    public String solution(String s) {
       String[] array = s.split("");
       Arrays.sort(array, Collections.reverseOrder());
       return String.join("",array);
    }
}