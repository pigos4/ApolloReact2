import React, { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import "../App.css";

export default function CRYPTO() {
  const [result, setresult] = useState({ name: "", value: [] });
  const [callQuery, setcallQuery] = useState(false);
  function RenderResults() {
    return (
      <>
      {(result.name!=="")?(<div className="valueCrypto">
        <p>Name: {result.name} </p>
        
         <p> Value:</p>
          {result.value.map((x, index) => (
            <p key={index}>{x}</p>
          ))}</div>):""}
        
      </>
    );
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
    if (data) {
      console.log(data);
      setresult({ name: data.crypto.name, value: [data.crypto.value] });
    }
  }, [data, callQuery]);

  return (
    <>
      <div className="cryptoContainer">
        <div className="smallContainer">
          <h1>
            Insert the simbol of the crypto to see the price in real time.
          </h1>
          <br />
          <input
            type="text"
            onChange={(e) => setinputsUser({ symbol: e.target.value })}
          ></input>
          <input
            type="submit"
            onClick={() => {
              setcallQuery(true);
              getFields({ variables: { symb: inputsUser.symbol } });
            }}
          ></input>
          <RenderResults />
          {loading ? <p>loading</p> : ""}
        </div>
      </div>
    </>
  );
}
