import java.util.Arrays;

class Solution {
    public String solution(String[] seoul) {
        String x = String.valueOf(Arrays.asList(seoul).indexOf("Kim"));
        String Kim = "김서방은 ";
        String exist = "에 있다";
            
        return Kim + x + exist;
    }
}