import java.util.Arrays;

class Solution {
    public boolean solution(int x) {
        String[] harshad = String.valueOf(x).split("");
        int sum = Arrays.stream(harshad)
                                 .mapToInt(Integer::parseInt)
                                 .sum();
          
        return x % sum == 0 ? true : false ;
    }
}