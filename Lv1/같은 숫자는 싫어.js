function solution(arr)
{
    var answer = [];
    for(var i = 0 ; i<arr.length;i++){
        if(arr[i]!==arr[i+1]){ //배열i번째와 그다음이 일치하지 않으면
            answer.push(arr[i]); // answer에 push하기
        }
    }
    
    return answer;
}

