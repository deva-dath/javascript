var num1=60,num2=72,factor=0;
if (num1>num2) {
    limit=num2;
}
else{
    limit=num1;
}
let count=1;
for(i=1;i<limit;i++){
    if ((num1%i==0) && (num2%i==0) ){
        factor=i;
        console.log(factor);  
    }
    count++;

}
console.log(`HCF ${factor}`);
console.log(count);

