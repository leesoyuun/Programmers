function solution(n)
{
    var answer = 0;
    var str = n.toString();
    var n_split = str.split('');
    for(let i = 0; i<n_split.length;i++){
        answer += parseInt(n_split[i]);
    }
    return answer;
}