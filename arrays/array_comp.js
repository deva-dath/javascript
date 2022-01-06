// finding common elements
var arr1=[10,20,30,40,50,90]
var arr2=[10,20,70,80,30,70]
var flag=0;
var op=[]
for(let i of arr1){
    for(let j of arr2){
        if (i==j) {
            op.push(i)
            flag++;
        }
    }
}
console.log(op);
if (flag==0) {
    console.log("no common elements found");
}