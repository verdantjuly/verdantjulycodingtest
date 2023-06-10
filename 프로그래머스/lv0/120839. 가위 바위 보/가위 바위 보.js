function solution(rsp) {
    // 낸다>이긴다 : 2>0 0>5 5>2
    newrsp = ""
    rsp.split("").map(function(myturn){
        if(myturn=="2"){newrsp = newrsp + "0"}
        else if(myturn=="0"){newrsp = newrsp + "5"}
        else if(myturn=="5"){newrsp = newrsp + "2"}
    })
    return newrsp
}