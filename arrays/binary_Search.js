var arr=[2,93,74,57,70,8,12]
arr.sort((i,j)=>i-j)
var low=0,upp=arr.length-1;
var flag=0;
var element=100
while (low<=upp) {
    let mid=Math.floor((low+upp)/2)
    if (element==arr[mid]) {
        flag=1;
        break
    }
    else if (element>arr[mid]) {
        low=mid+1;
    }
    else if (element<arr[mid]) {
        upp=mid-1;
    }
    
    
    
}
console.log(arr);
console.log(flag==1?"found":"not found");