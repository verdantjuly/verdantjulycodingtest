import java.util.*;

class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        // Remove zeros from lottos
        int zero = 0;
        Set<Integer> notZeroSet = new HashSet<>();
        for (int num : lottos) {
            if (num != 0) {
                notZeroSet.add(num);
            } else {
                zero++;
            }
        }

        // Count the matches
        int matches = 0;
        for (int num : win_nums) {
            if (notZeroSet.contains(num)) {
                matches++;
            }
        }

        // Calculate ranks
        int bestRank = (matches == 0) ? 6 : 7 - (matches + zero);
        int worstRank = (matches == 0) ? 6 : 7 - matches;

        if (zero == 6){
            bestRank = 1;
        }
        return new int[]{bestRank, worstRank};
    }
}
