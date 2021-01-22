const { gql } = require('apollo-server');
const typeDefs = gql`type Query{
    ciao: [Ciao]
}
type User {
id: ID
name: String
username: String
password: String
}
type Ciao{
    id:ID
    nome:String,
    cognome:String
}
type Resp{
    response:String
}
type UserLogin{
    id:String
    username:String
    status:String
}

type Mutation{addUser(name: String, username: String, password: String): Resp,
loginUser(username: String, password: String): UserLogin}
`; 
 module.exports = typeDefs;