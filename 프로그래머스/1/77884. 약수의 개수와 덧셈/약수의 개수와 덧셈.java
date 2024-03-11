class Solution {
    public int solution(int left, int right) {
        int answer = 0;
        for(int i= left; i<right+1; i++){
            if(Math.pow(Math.floor(Math.sqrt(i)),2) == i ){
                answer -= i;
            } else {
                answer += i;
            }
        }
        return answer;
    }
}