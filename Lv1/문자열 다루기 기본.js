function solution(s) {
    const result = parseInt(s);
    if((s.length == 4 || s.length == 6)&& s == result)
        return true
    else
        return false
}