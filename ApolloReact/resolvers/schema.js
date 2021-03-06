const { gql } = require('apollo-server');
const typeDefs = gql`type Query{
    test: [Test]
    dato(id: String): Dato
    crypto(symb:String): Crypto
    records: [Records]
}
type Records{
    nome:String
      id:ID
      barcode:String
      price:Int
}
type User {
id: ID
name: String
username: String
password: String
}
type Crypto {
    name:String
    value : Float
}
type Test{
    id:ID
    name:String,
    surname:String
}


type Dato {
  
  name: String
  info:String
  Description:String
  father:Int
  child:[Childs]
}
type Childs {
    ID:Int
    Name:String
}
type Resp{
    response:String
}
type Res{
    response:String
}
type UserLogin{
    id:String
    username:String
    status:String
}
type DeleteItem{
    status:String
}

type Mutation{addUser(name: String, username: String, password: String): Resp,

addNewTopic(name: String
  info:String
  Description:String): Res,
addInput(name: String, price: Int, barcode: String): Res,
loginUser(username: String, password: String): UserLogin,
deleteitem(idd: String): DeleteItem}
`; 
 module.exports = typeDefs;