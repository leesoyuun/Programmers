function solution(seoul) {
    let count = 0;
     for(let i = 0; i<seoul.length;i++){
         if(seoul[i] == 'Kim')
             return `김서방은 ${count}에 있다`
         else
             count++;
     }
 }