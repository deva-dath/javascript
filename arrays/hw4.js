var arr=[5,6,7,8];
var op=[];
var sum=0;
var arr1=[]
for(let i of arr){
    sum=sum+i;
}
for(let i of arr){
    arr1.push((sum-i))
}
console.log(arr1);