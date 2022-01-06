var sum=0;
var dig="";
for(num=345;num!=0;num=Math.floor(num/10)){
    let dig=num%10;
    sum=sum+dig**3;
}
console.log(sum);
