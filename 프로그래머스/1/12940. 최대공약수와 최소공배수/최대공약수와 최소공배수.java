class Solution {
    public int[] solution(int n, int m) {
        int[] answer = new int[2];
        for (int i=1; i<=n*m; i++){
            if (i%n == 0 && i%m == 0){
                answer[1] = i;
                break;
            }            
        }
        for (int j=n; j>0; j--){
            if (n%j == 0 && m%j == 0){
                answer[0] = j;
                break;
            }            
        }
        return answer;
    }
}