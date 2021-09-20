function foo(x: string) {
    return 'foobar'
}

// foo(100);
foo('dodo')
// foo({dodo: fafa})


class User {
    name:string;
    password:number;
    skills:string[];
    status:boolean;
    // greeting:() =>{}


    // constructor(name: string, password: number, skills: string[], status: boolean) {
    //     this.name = name;
    //     this.password = password;
    //     this.skills = skills;
    //     this.status = status;
    // }
}

// function test(a:{name:string, password: number, skills: string[], status:boolean}) {}

function test(a:User) {

}

test({name:'vova', password: 12345, skills:['js', 'react', 'noda'], status:false})
test({name:'vova', password: 12345, skills: ['js', 'react', 'noda', 'java'], status:true})

let user = new User();
user.name = 'dima';
user.password = 12345;
user.skills = ['javascript'];
user.status = true;

test(user);
test({name:'kokos', password:12345, skills:['javascript'], status: true})

interface IUser {
    name: string;
    password: number;
    greeting?(c: string) :string ;
}

function Tort(b:IUser) {}

Tort({name:'vasya', password:5432})
Tort({name:'vasya', password:5432, greeting(c: string): string {
    return 'hello'
    }})

class X implements IUser {
    ownXProps: string;
    name: string;
    password: number;
}

let  x = new X();
let iUsers: IUser[] = [
    x,
    {name: 'vasya', password: 5432, greeting: (c: string): string => {return 'hello'}}
]

Tort(new X());

//обєктно орієнтоване програмування ООП

// function foobar(user: User) {
//     user.greeting();
// }
//
// let user1 = new User()
// foobar(user1)

