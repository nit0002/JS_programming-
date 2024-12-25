/* class user {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;

    }

   getMethod(){
    return `${this.password}sanodiya`
   }
 }

const store= new user('Nitin','nitn12@gmsil.com','nitin@123');
console.log(store.getMethod());  */  

//before classes we use this method

function user(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}
user.prototype.getMethod = function(){
    console.log(`${this.email}niti123`);
}
user.prototype.getMethod2 = function(){
    console.log(`${this.name.toUpperCase()}`);
}

const store= new user('Nitin','nitn12@gmsil.com','nitin@123');
console.log(store.getMethod());
console.log(store.getMethod2());