class Student{
    constructor(rollno,stu_name,mEng,mMat,mSci){
        //parameter constructor
        this.rollno=rollno;
        this.stu_name=stu_name;
        this.mEng=mEng;
        this.mMat=mMat;
        this.mSci=mSci;
    }
    calculateTotalmarks(){
        return this.mEng+this.mMat+this.mSci;
    }
    calculatepercentage(){
        const totalmarks=this.calculateTotalmarks();
        const numberofsubject=3;
        return (totalmarks/(numberofsubject*100))*100;
    }
    displayres(){
        const totalmarks=this.calculateTotalmarks();
        const pecentage=this.calculatepercentage();
        console.log(`Roll_no:${this.rollno} Name:${this.stu_name} Marks_English:${this.mEng} 
        Marks_Maths:${this.mMat} Marks_Science:${this.mSci} Totalmark:${totalmarks} Percentage:${pecentage}`);
 
    }
}
const stu=new Student(1,"Saranya",81,99,100);
stu.displayres();
 