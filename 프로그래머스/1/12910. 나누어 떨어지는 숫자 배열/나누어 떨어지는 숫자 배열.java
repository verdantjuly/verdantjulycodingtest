import java.util.Stack;
import java.util.Arrays;

class Solution {
    Stack<Integer> stack = new Stack<Integer>();
    public Integer[] solution(int[] arr, int divisor) {
        for(int i = 0; i< arr.length; i++){
            if (arr[i]%divisor == 0){
                stack.push(arr[i]);
            }
        }
        Integer[] answer = stack.toArray(new Integer[stack.size()]);
        Arrays.sort(answer);
        Integer[] none = {-1};
        return stack.size() == 0 ? none : answer;
    }
}