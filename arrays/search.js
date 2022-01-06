var arr=[10,75,86,90,38,7,7]
var num=7;
var flag=0;
for(let i of arr){
    if (num==i) {
        console.log("number found");
        flag++;
        break
    }
}
if (flag==0) {
   console.log("number not found"); 
}