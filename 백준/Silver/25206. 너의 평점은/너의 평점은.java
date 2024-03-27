import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double totalScore = 0.0;
        double totalSum = 0.0;
        Map<String, Double> map = new HashMap<String, Double>();
        map.put("A+", 4.5);
        map.put("A0", 4.0);
        map.put("B+", 3.5);
        map.put("B0", 3.0);
        map.put("C+", 2.5);
        map.put("C0", 2.0);
        map.put("D+", 1.5);
        map.put("D0", 1.0);
        map.put("F", 0.0);

        for (int i = 0; i < 20; i++) {
            String input = sc.nextLine();
            String[] array = input.split(" ");
            double score = Double.valueOf(array[1]);

            if (!array[2].equals("P")) {
                double grade = map.get(array[2]);
                totalSum += score * grade;
                totalScore += score;
            }
        }
        System.out.println(totalSum / totalScore);
        sc.close();
    }
}