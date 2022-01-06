var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district
// var positive=coivd_data.reduce((pos1,pos2)=>pos1[3]>pos2[3]?pos1:pos2)[1]
// console.log(positive);



// q2 district with higest 1 dose vaccination rate
// var doseFirst=coivd_data.reduce((dose1,dose2)=>dose1[5]>dose2[5]?dose1:dose2)
// var greenDistricts=coivd_data.filter(dose1=>dose1==doseFirst)
// console.log(greenDistricts);


// q3 district with lowest death cases
// var lowDeath=coivd_data.reduce((deth1,deth2)=>deth1[3]<deth2[3]?deth1:deth2)[1]
// console.log(lowDeath);


// q4 sort district with +ve cases
// var sortPositive=coivd_data.sort((pos1,pos2)=>pos2[2]-pos1[2])
// console.log(sortPositive);


// q5 sort the districts based on 1st dose
// var sortFirstdose=coivd_data.sort((dos1,dos2)=>dos2[5]-dos1[5])
// console.log(sortFirstdose);

// // q6 is there any states with +ve cases > 60000
// var statesWithSixThousand=coivd_data.filter(cases=>cases[2]>"60000").map(cases=>cases[1])
// console.log(statesWithSixThousand);


// q7 print trissur details
// var trssr=coivd_data.find(trs=>trs[1]=="thrissur")
// console.log(trssr);


        //   ***      // q8 total nu,ber of +ve cases
// var positiveCases=coivd_data.reduce((pos1,pos2)=>pos1[2]+pos2[2])
// console.log(positiveCases);


// **// q9 total number of cured cases







// q10 cured numbers of iduky
var curedIduki=coivd_data.find(cur=>cur[1]=="iduky")[4]
console.log(curedIduki);



// // q11 total number of death cases
var totDeath=coivd_data.reduce((dea1,dea2)=>dea1[4]+dea2[4])
console.log(totDeath);