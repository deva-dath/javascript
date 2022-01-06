var arr=[2,3,4,5]
var element=26;
var count=0;
var flag=0
var upp=arr.length-1,low=0;
// case 1
while (low<upp) {
    let curr_sum=arr[low]+arr[upp];
    if (curr_sum==element) {
    console.log(`pairs are (${arr[low]},${arr[upp]})`);
    flag++    
    break;
    }
    // case 2
    else if (curr_sum<element) {
        low=low+1;
    
       
    }
    // case 3
    else if (curr_sum>element) {
       upp=upp-1
        
    }
    
}
if (flag==0) {
    console.log("no pairs found");
}
