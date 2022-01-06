expenses=[10000,20000,20000,30000,40000,50000,50000]
var unique=[];
for(let amount of expenses){
    if (unique.includes(amount)) {
        
    }
    else{
        unique.push(amount)
    }

}
console.log(unique);