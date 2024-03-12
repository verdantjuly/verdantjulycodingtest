class Solution {
    public long solution(int price, int money, int count) {
        long wallet = money;
        for (long i=1; i<count+1; i++){
            wallet = wallet - i * price;
        }
        return wallet >= 0 ? 0 : -wallet;
    }
}