function solution(s){
    var answer;
    var cnt_p = 0;
    var cnt_y = 0;

   for(let i = 0; i<s.length; i++){
       if(s[i] == 'P' || s[i] == 'p')
           cnt_p++;
       if(s[i] == 'y' || s[i] == 'Y')
           cnt_y++;
   }
    return (cnt_p == cnt_y)? true : false;
}