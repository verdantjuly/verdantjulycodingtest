import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public String solution(String myString) {
        String[] strings = myString.split("");
        strings = Arrays.stream(strings)
                        .map(String::toUpperCase)
                        .toArray(String[]::new);
            
        return String.join("",strings);
    }
}