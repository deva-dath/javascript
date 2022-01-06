expenses=[10,20,30,40,50,50,60]
var st= new Set();
for(let amount of expenses){
    st.add(amount);
}
console.log(st);