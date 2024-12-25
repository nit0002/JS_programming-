
// console.log(creatFun.power)
// console.log(creatFun(2))
// console.log(creatFun.prototype)

function creatFun(multi){
     return multi*2;
}

function creatUser(firstName,age  ) {
             this.firstName =  firstName ;
             this.age = age;
}
creatUser.prototype.increament = function(){
   this.age++
}

creatUser.prototype.printMe = function(){    //this mtlb jis ka
         console.log(` age is ${this.age++}`);
}

const Ntin =  new creatUser("nitin",22); //constructor by new word 
const vishal =  new creatUser("Virat",25);

Ntin.printMe();