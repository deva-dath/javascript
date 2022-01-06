class Student{
    constructor(name,age,batch,division){
        this.name= name;
        this.age= age;
        this.batch= batch;
        this.division= division;
    }
    getStudent(){
        console.log(this.name,this.age,this.batch,this.division);
    }
}
stdnt1=new Student("dev","21","Bio","A");
stdnt=new Student("dath","21","cse","B");

stdnt1.getStudent();

stdnt.getStudent()