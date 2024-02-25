class Solution {
    public int solution(int a, int b) {
        int concatted_result = Integer.valueOf(String.valueOf(a) + String.valueOf(b));
        int multiplied_result = 2 * a * b;
        
        return concatted_result < multiplied_result  ? multiplied_result: concatted_result ;
        
    }
}