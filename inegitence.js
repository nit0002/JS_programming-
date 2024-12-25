class user{
    constructor(username)
    {
        this.username = username;
    // this.email = email;
    // this.password = password;
    }
    logMe(){
        console.log(`1UserNAme ${this.username}`)
    }
}
class user2 extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    printMethod(){
        console.log(`${this.email}`)
        console.log(`${this.password}`)
    }


}

const chai = new user2('Ntin',"nitin102@gmail.com",'123');
console.log(chai.logMe());
console.log(chai.printMethod());

