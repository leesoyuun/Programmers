function solution(n) {
    let first = parseInt(Math.sqrt(n));
    let second = Math.pow(first,2);
    
    if(n == second){
        return Math.pow((first+1),2);
    }
    else
        return -1;
}