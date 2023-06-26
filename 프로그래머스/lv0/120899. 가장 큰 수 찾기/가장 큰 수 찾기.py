def solution(array):
    maximum = array[0]
    for i in array:
        if maximum < i:
            maximum = i
    answer = [maximum, array.index(maximum)]        
    return answer