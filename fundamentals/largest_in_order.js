var num1=300,num2=700,num3=500;
if ((num1>num2) && (num1>num3)){
    if (num2>num3) {
        console.log(`second largest is ${num2}`);
    }
    else{
        console.log(`second largest is ${num3}`);
    }
    console.log(num1,num2,num3);
}
else if ((num2>num1) && (num2>num3)) {
    if(num1>num3){
        console.log(`sec largest is ${num1}`);
    }
    else{
        console.log(`sec largest is ${num3}`);
    }
    console.log(num2,num1,num3);
}
else if ((num3>num1) && (num3>num2)) {
    if(num1>num2){
        console.log(`sec largest is ${num1}`);
    }
    else{
        console.log(`sec largest is ${num2}`);
    }
    console.log(num3,num1,num2);
}