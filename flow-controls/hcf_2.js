var num1=60,num2=72,factor=0,i=1;
while (i<=num1) {
    if ((num1%i==0) && (num2%i==0)) {
        factor=i;
        break;
    }
    console.log(factor);
}
console.log(`hcf ${factor}`);