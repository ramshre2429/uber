class person{
    constructor(name,age,location,job)
    {
        this.name=name;
        this.age=age;
        this.location=location;
        this.job=job;
    }
}





const nam=new person("ramshree","25","salem","banker")
const nam2=new person("lucifer","24","hell","devil")
console.log(nam.name+" is my name and i am "+ nam.age + " years old. i am from " + nam.location +" and i am a "+ nam.job) 
console.log(`my name is ${nam2.name}. i am from ${nam2.location}. i am ${nam2.age} years old and i am a ${nam2.job}`)