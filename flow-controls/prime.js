var num=247,flag=0;
for(i=2;i<num;i++){
    if (num%i==0) {
        flag=1;
        break;
    }
}
console.log(flag==0?"prime":"not prime");
// // if (flag==0) {
//     console.log("PRIME");
// }
// else{
//     console.log("not PRIME");
// }