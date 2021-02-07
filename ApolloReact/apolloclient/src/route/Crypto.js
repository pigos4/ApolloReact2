import React, { useState, useEffect} from "react";
import { gql, useLazyQuery } from "@apollo/client";

export default function CRYPTO() {
const [result,setresult]=useState({name:"",value:[]})
const [callQuery,setcallQuery]=useState(false)
function RenderResults(){
    
    return (<><p>Name:  {result.name} </p><ul>Value:{result.value.map((x,index)=>(<li key={index}>{x}</li>))}</ul></>)
}


  const CRYPTO = gql`
  query crypto($symb: String) {
    crypto(symb: $symb) {
      name
      value
    }
  }
`;
const [getFields, { loading, data }] = useLazyQuery(CRYPTO);
 const [inputsUser, setinputsUser] = useState({
    symbol: undefined,
    
  });
  useEffect(() => {
    if(data){
        console.log(data)
        setresult({name:data.crypto.name,value:[data.crypto.value]})
      }  

  },[data,callQuery])
  

 return (
     <>
     Insert the simbol of the crypto to see the price in real time.<br/>
     <input type="text" onChange={(e)=>setinputsUser({symbol:e.target.value})}></input>
     <input type="submit" onClick={()=>{setcallQuery(true);getFields({ variables: { symb: inputsUser.symbol } })}}></input>
     <RenderResults/>
     {(loading)?<p>loading</p>:""}
     </>
 )}



 
  