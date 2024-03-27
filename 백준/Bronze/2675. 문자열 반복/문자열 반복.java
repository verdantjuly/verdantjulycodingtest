import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testcase = sc.nextInt();
        sc.nextLine();
        ArrayList<String> cases = new ArrayList<String>();
        for (int i = 0; i < testcase; i++) {
            String input = sc.nextLine();
            String[] array = input.split(" ");
            String[] letters = array[1].split("");
            int repeat = Integer.valueOf(array[0]);
            String result = "";
            for (int j = 0; j < letters.length; j++) {
                result += letters[j].repeat(repeat);
            }
            cases.add(result);
        }
        cases.forEach(item -> System.out.println(item));
        sc.close();
    }
}
