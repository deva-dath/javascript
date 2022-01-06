// filter used when conditions are specified

// even numbers filter
var num=[1,2,3,4,5,6,7,8,9,10]
var even=num.filter(num=>num%2==0)
console.log(even);


// string ops
var names=["arjun","arvind","anil","arun","ravi","ram","kumar"]
var anames=names.filter(name=>name[0]=="a" || name[0]=="A")
console.log(anames);