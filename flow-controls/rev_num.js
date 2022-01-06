var num=123;
var temp="";
while (num!=0) {
    let last_dig=num%10;
    temp+=last_dig
    num=Math.floor(num/10);
}
console.log(temp);