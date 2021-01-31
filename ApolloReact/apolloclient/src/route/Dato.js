import React, { useState, useEffect } from "react";
import { gql, useMutation,  useLazyQuery } from "@apollo/client";
export default function Home() {
  const DATO = gql`
  query dato($id: String) {
    dato(id: $id) {
      name
      info
      Description
    }
  }
`;
const [getFields, { loading, data }] = useLazyQuery(DATO);
 const [inputsUser, setinputsUser] = useState({
    id: "36",
    name: "",
    description: "",
    extraInfo: "",
    child: [],
  });
  const [renderDataLoading, setrenderDataLoading] = useState(null);
  if(renderDataLoading===null)getFields({ variables: { id: inputsUser.id } })

 
  useEffect(() => {
   
    if (loading) {
      setrenderDataLoading(
        <>
          <p>loading</p>
        </>
      );
    } else {
      setrenderDataLoading(<></>);
    }
   
    if (data) {
      console.log(data.dato);
      setrenderDataLoading(
        <div>
          <p>Name:{data.dato.name}</p>
          <p>Info:{data.dato.info}</p>
          <p>Description:{data.dato.Description}</p>
        </div>
      );
    }
  }, [loading, data]);

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) =>
            setinputsUser({ ...inputsUser, name: e.target.value })
          }
          placeholder="Name"
        ></input>
        <input
          type="text"
          onChange={(e) =>
            setinputsUser({ ...inputsUser, description: e.target.value })
          }
          placeholder="Descriptio"
        ></input>
        <input
          type="text"
          onChange={(e) =>
            setinputsUser({ ...inputsUser, extraInfo: e.target.value })
          }
          placeholder="ExtraInfo"
        ></input>
      </div>
      <input
        type="button"
        onClick={() => getFields({ variables: { id: inputsUser.id } })}
        value="submit"
      ></input>

      <input
        type="button"
        onClick={() => console.log(data)}
        value="submitt"
      ></input>
      {renderDataLoading}
    </>
  );
}
//   useEffect(() => {

//    function ReqQuery(nameRequest){
//     const DATO=gql`

//     query dato($name:String){dato(name:$name){name}
//     }`;
// //if(nameRequest.name){console.log(nameRequest)
//      const { loading, error, data } = useQuery(DATO, {variables:  nameRequest.name});
//   if(data)console.log(data)

// return(<>ciao</>)
// }
// }, [renderQuery])
//    if (data){console.log(data)}
//  }
//  if (loading) return <p>Loading...</p>;
// if (error) return <p>Error :(</p>;
//return  data.ciao.map((res)=><p key={res.id}>nome:{res.nome} cognome:{res.cognome}</p>)

//const [dataInput, { data, loading }] = useMutation(DATA_INPUT);

// const DATA_INPUT = gql`
// mutation($username: String!, $password: String!, ) {
//   loginUser(  username: $username, password:$password) {
//     id,
//     username,
//     status
//   }
// }
// `;
// const dat = [
//   { id: 1, name: "javascript", moreData: "more info", children: [101, 102] },
//   { id: 101, name: "Array", moreData: "aaarraaayy", children: [103, 104] },
//   { id: 102, name: "Object", moreData: "ooobbbjjject", children: [105, 106] },

//   {
//     id: 103,
//     name: "Arrayspec1",
//     moreData: "aaarraaayy",
//     children: [107, 108],
//   },
//   {
//     id: 104,
//     name: "Arrayspec2",
//     moreData: "ooobbbjjject",
//     children: [101, 102],
//   },

//   {
//     id: 105,
//     name: "objectspec1",
//     moreData: "aaarraaayy",
//     children: [101, 102],
//   },
//   {
//     id: 106,
//     name: "Objectspec2",
//     moreData: "ooobbbjjject",
//     children: [101, 102],
//   },
//   {
//     id: 107,
//     name: "Objectspec3",
//     moreData: "ooobbbjjject",
//     children: [101, 102],
//   },
//   {
//     id: 108,
//     name: "Objectspec4",
//     moreData: "ooobbbjjject",
//     children: [101, 102],
//   },
// ];
// function buttonNameFromArray(id) {
//   let obj = dat.find((s) => s.id === id);
//   console.log(obj, "objbutton");
//   return (
//     <input
//       type="button"
//       value={obj.name}
//       key={obj.id}
//       onClick={() => setcreaterender(<CreateRender id={obj.id} />)}
//     ></input>
//   );
// }
// function CreateRender(props) {
//   console.log(props.id, "propsid");
//   let obj = dat.findIndex((x) => x.id === parseInt(props.id));
//   console.log(obj, "obj");
//   return (
//     <>
//       <div>
//         nome madre:{dat[obj].name} figli:
//         {dat[obj].children.map((id) => buttonNameFromArray(id))}
//       </div>
//     </>
//   );
// }
