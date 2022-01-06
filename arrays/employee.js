var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
// sorting
employees.sort((e1,e2)=>e2[2]-e1[2])
// sec highest salary
console.log(employees[1][2]);
// min slary
console.log(employees[employees.length-1][2]);
// number of employees
console.log(employees.length);
// employess who are developers
var develepor_details=[]
for(let employee of employees){
    if (employee[3]=="developer") {
        develepor_details.push(employee)
    }
}
// developer with highest salary
develepor_details.sort((e1,e2)=>e2[2]-e1[2])
console.log(develepor_details[0][2]);
// employee whose name stsrts with a
for(let employee of employees){
    if (employee[1][0]=="A"||employee[1][0]=="a") {
        console.log(employee);
    }
}
for(let emp of employees){
    if (emp[4]>2009 && emp[5]<2016) {
        console.log('here');
        console.log(emp);
    }
}