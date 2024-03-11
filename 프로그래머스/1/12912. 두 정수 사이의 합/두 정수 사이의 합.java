import java.util.Arrays;

class Solution {
    public long solution(int a, int b) {
        int[] numbers = {a, b};
        Arrays.sort(numbers);
        long answer = 0;
        for(long i = numbers[0]; i < numbers[1]+1; i++){
            answer = answer + i;
        }
        return answer;
    }
}