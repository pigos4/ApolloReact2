import React, { useState, useEffect } from "react";
import { gql, useMutation,  useLazyQuery } from "@apollo/client";



export default function CRYPTO() {
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
  if(data){
      
  }
//   const [renderDataLoading, setrenderDataLoading] = useState(null);
//   if(renderDataLoading===null)getFields({ variables: { id: inputsUser.id } })

 return (
     <>
     <input type="text" onChange={(e)=>setinputsUser({symbol:e.target.value})}></input>
     <input type="submit" onClick={()=>getFields({ variables: { symb: inputsUser.symbol } })}></input>

     <input type="submit" onClick={()=>console.log(data) }></input>
     
     
     
     
     
     
     </>
 )}