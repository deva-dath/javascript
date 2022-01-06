var expenses=[10000,15000,20000,25000,30000,35000,40000,40000,50000]
min_exp=expenses[0];
for(let amount of expenses){
    if (amount<min_exp) {
        min_exp=amount;
    }
}
console.log(min_exp);
