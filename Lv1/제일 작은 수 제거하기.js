function solution(arr) {
    var answer = []; 
    if(arr.length < 1){
       answer[0] = -1;
    }
    else{
        arr.splice(arr.indexOf(Math.min.apply(null, arr)),1);
        /*splice : 기존 배열의 내용 교체 
        ex. math.splice(4,1,'may') = math의 배열의 4번 인덱스에서 하나 제거하고 may추가
        indexOf : 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
        apply : 주어진 this 값과 배열 (또는 유사 배열 객체) 로 제공되는 arguments 로 함수를 호출
        apply(func 를 호출하는데 제공될 this 의 값, func 이 호출되어야 하는 인수를 지정하는 유사 배열 객체)
        */
        answer = arr;
    }
    return answer;
}
