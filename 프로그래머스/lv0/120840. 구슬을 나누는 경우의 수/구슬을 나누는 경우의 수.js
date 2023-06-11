function solution(balls, share) {
    // 모두 다른 구슬의 개수 balls
    // 이것을 나눠 줌. share 수 만큼
    // 구슬의 순서는 고려하지 않음
    
    // balls 안에서 첫 번째 share를 뽑을 수 있는 경우의 수 = balls 
    // balls 안에서 두 번째 share를 뽑을 수 있는 경우의 수 = balls - 1
    
    // balls 5 share 3
    // balls 3 share 2
    let answer = 1
    let same = 1
    // balls 5, share 3
    if(share==1){
    return balls
    }
    else{
        for(i=0 ; i<share ; i++){
           answer = answer * (balls - i)
            same = same * (share - i)
        }
        
        return answer/same
        }
}