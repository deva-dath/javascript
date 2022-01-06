var temp="",num=123;
for(num=123;num!=0;num=Math.floor(num/10)){
    let last_dig=num%10;
    temp+=last_dig
}
console.log(temp);