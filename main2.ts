import {Post} from "./post/Post";

// let post1: Post = {};

// "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
// },
// "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"

interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address: IAddress
    company: ICompany
}

interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo
}

interface IGeo {
    lat: string,
    lng: string
}

interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
}


let user: IUser = {
        id: 777,
        name: 'Dmytro',
        username: 'Dimanno',
        email: 'dimanno.dev@gmail.com',
        phone: '0973405898',
        website: 'www.full-life.com.ua',
        address: {
        street: 'Shevchenka',
            suite: 'Apart 73',
            city: 'Lviv',
            zipcode: '79033',
            geo: {
                lat: '12345---44',
                lng: '960594---687'
        }},
        company: {
            name: 'Tesla',
                catchPhrase: 'string',
                bs: 'string'
        }}
