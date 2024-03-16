import java.util.*;
import java.text.*;

class Solution {
    public int[] solution(String today, String[] terms, String[] privacies) {
        List answer = new ArrayList();
         try{
        
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        String parsedToday = today.replace(".","/");
        parsedToday = parsedToday + " 00:00:00";
        Date todayDate = formatter.parse(parsedToday);
      
        
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(todayDate);
        
     
        String[][] parsedPrivacies = parser(privacies);
        String[][] parsedTerms = parser(terms);
       
        
        for(int i =0; i<parsedPrivacies.length ; i++){
            for(int j = 0; j< parsedTerms.length; j++){
                if (parsedPrivacies[i][1].equals(parsedTerms[j][0])){
                    String privacyDate = parsedPrivacies[i][0].replace(".","/");
                    privacyDate = privacyDate + " 00:00:00";
                    Date startDate = formatter.parse(privacyDate);
                    Calendar endDate = Calendar.getInstance();
                    endDate.setTime(startDate);
                    endDate.add(Calendar.MONTH, Integer.valueOf(parsedTerms[j][1]));
                    if (calendar.compareTo(endDate) >= 0){
                        answer.add(i+1);
                    }
                    break;
                }
            }
      
        }
         
         
          
         }catch(ParseException e){
             e.printStackTrace();
        }
         return answer.stream().mapToInt(i -> (int)i).toArray(); 
           
    }
    
    public String[][] parser(String[] input) {
        String[][] array = new String[input.length][3];
        for(int i = 0; i < input.length; i++) {
            array[i] = input[i].split(" ");
        }
        return array;
    }
}