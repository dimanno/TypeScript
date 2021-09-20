class Client <Type>{
    id: Type;
    login: string;
}

let client1: Client<number> = {
    id: 123,
    login: 'dudu',
}

let client2: Client<string> = {
    id: '123',
    login: 'dudu',
}