var num1=100,num2=60,num3=50;
if ((num1>num2) && (num3>num1)){
    if (num2>num3) {
        console.log(`second largest is ${num2}`);
    }
    else{
        console.log(`second largest is ${num3}`);
    }
}
else if ((num2>num1) && (num2>num3)) {
    if(num1>num3){
        console.log(`sec largest is ${num1}`);
    }
    else{
        console.log(`sec largest is ${num3}`);
    }
}
else if ((num3>num1) && (num3>num2)) {
    if(num1>num2){
        console.log(`sec largest is ${num1}`);
    }
    else{
        console.log(`sec largest is ${num2}`);
    }
}