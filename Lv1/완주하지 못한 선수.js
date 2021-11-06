function solution(participant, completion) {
    
    participant.sort(); //알게된 것 = sort
    completion.sort();
    
    for(let i = 0; participant.length;i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}