var arr=[2,3,4,5];
var sum=8;
var flag=0;
var count=0;
for(let i of arr){
    for(let j of arr){
        if (i+j==sum) {
                console.log(`pairs are (${i},${j})`);
          
        } 
        count++;   
    }
    
}console.log(count);
