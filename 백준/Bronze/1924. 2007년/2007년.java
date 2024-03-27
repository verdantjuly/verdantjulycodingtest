import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        sc.close();
        String[] time = input.split(" ");
        int month = Integer.valueOf(time[0]);
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        map.put(1, 31);
        map.put(2, 28);
        map.put(3, 31);
        map.put(4, 30);
        map.put(5, 31);
        map.put(6, 30);
        map.put(7, 31);
        map.put(8, 31);
        map.put(9, 30);
        map.put(10, 31);
        map.put(11, 30);
        map.put(12, 31);
        int count = 0;
        for (int i = 1; i < month; i++) {
            count += map.get(i);
        }
        count = count + Integer.valueOf(time[1]);
        String[] days = { "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" };
        System.out.println(days[count % 7]);
    }
}