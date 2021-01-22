const mongo = require('./mongo/mongodb');

module.exports = {
    Mutation :{addUser: async (root, args, context, info) => {
        let res =mongo("Apollo","Users",{args})
        return await res.then((x)=>{return {response:x};})
       //
        
      },
      loginUser:async (root, args, context, info) => {
          let resultFindUser= mongo("Apollo","Users",{args},"findOne")
          console.log(resultFindUser,"findOne")
          return {id:1,
            username:"a",
            status:"ok"}
    //     let res =mongo("Apollo","Users",{args})
    //     return await res.then((x)=>{return {response:x};})
    //    //
        
      },
    
    },
    Query:{ciao:()=>[{"id":1,"nome":"Daniel","cognome":"piga"},{"id":2,"nome":"jack","cognome":"boo"}]}
};
