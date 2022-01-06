var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]
// mobile names list
// var mob_names=mobiles.map(mob=>mob[2])
// console.log(mob_names);


// mobile price list
// var price=mobiles.map(mob=>mob[3])
// console.log(price);

// samsung phoones
// var samsung=mobiles.filter(mob=>mob[1]=="samsung").map(mob=>mob[2])
// console.log(samsung);

// phones under 25k
// var twenty_five=mobiles.filter(mob=>mob[3]<"25000").map(mob=>[mob[2],mob[3]])
// console.log(twenty_five);

// phonesunder 25 to 30k
// var range=mobiles.filter(mob=>mob[3]>="25000"&& mob[3]<="35000").map(mob=>[mob[2],mob[3]])
// console.log(range);



// list all 5g mob names
// var fiveg=mobiles.filter(mob=>mob[6]=="5G").map(mob=>mob[2])
// console.log(fiveg);

// list all 5g mob names under 25k
// var twenty_five=mobiles.filter(mob=>mob[6]=="5G").filter(mob=>mob[3]<="25000").map(mob=>mob[2])
// console.log(twenty_five);

// band 5G and AMOLED
// var amoled=mobiles.filter(mob=>mob[6]=="5G").filter(mob=>mob[5]=="AMOLED").map(mob=>mob[2])
// console.log(amoled);



// reduce
// var min_price=mobiles.reduceRight((mob1,mob2)=>mob1[3]<mob2[3]?mob1:mob2)
// console.log(min_price);
// var max_price=mobiles.reduce((mob1,mob2)=>mob1[3]>mob2[3]?mob1:mob2)
// console.log(max_price);


// var max_price=mobiles.reduce((mob1,mob2)=>mob1[3]>mob2[3]?mob1:mob2)[3]
// console.log(max_price);


