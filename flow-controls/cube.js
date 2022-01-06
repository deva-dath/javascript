var num=345;
var sum=0;
var dig =""
while (num!=0) {
   let dig=num%10;
   sum=sum+dig**3;
   num=Math.floor(num/10);
}
console.log(sum);
