// let myName= "nitin   "
// consol.log(myName.trueLength) 

// let Myarr =['thor', 'sprider']

// let heroPower ={
//     thor: 'hammer',
//     sprider: 'sling',

//     getSpiderPower: function(){
//         console.log(`the power is ${this.sprider}`)
//     }
// }

// heroPower.prototype.hammer = function(){
//     console.log(`this is part of prototype for access through the object`)

// }
// Object.prototype.Learn = function(){
//     console.log(`this is create learn for accessing`)
// }
// Array.prototype.ntn = function(){
//     console.log(`this is access ntn giving power array`)
// }
 
// heroPower.Learn()
// Myarr.Learn()
// Myarr.ntn()
// heroPower.ntn();



//inheriTance
//__proto__ is used to refrencing to another object
                           let Teachr={
                               teacherH: true,
                           }
                           
                           let Ssturdent=
                           {
                               studentNm:false,
                           }
                           
                           let HeadTechr={
                               deparment: true,
                               __proto__: Teachr,
                           
                           }
                           
                        //    teacher.__proto__= user;     //old syntax
                           //modern syntax
                           
                           Object.setPrototypeOf(Ssturdent,Teachr);
                           let anotherUserName = "Cahiwithcode"
                            
                           String.prototype.trueLength =function(){
                               console.log(`${this}`)
                               console.log(`${this.name}`)
                               console.log(`True Length is  ${this.trim().length}`)
                           }
                           anotherUserName.trueLength()
                           "laptop".trueLength();
                           'basic'.trueLength();