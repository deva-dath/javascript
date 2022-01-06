var expenses=[10000,15000,20000,25000,30000,35000,40000,40000,50000]
max_exp=0;
for(let amount of expenses){
    if (amount>max_exp) {
        max_exp=amount;
    }
}
console.log(max_exp);
