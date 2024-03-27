import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        sc.close();
        String star = "*";
        String blank = " ";
        Stack<String> stack = new Stack<>();
        for (int i = 0; i < number * 2 - 1; i++) {

            if (i < number) {
                String row = star.repeat(i + 1) + blank.repeat(number - i - 1) + blank.repeat(number - i - 1)
                        + star.repeat(i + 1);
                System.out.println(row);
                if (i < number - 1) {
                    stack.push(row);
                }

            } else {
                System.out.println(stack.pop());
            }

        }
    }
}