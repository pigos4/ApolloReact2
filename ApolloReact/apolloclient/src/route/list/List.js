import React, { useState } from "react";
import Scanner from "./components/Scanner";
import { gql, useMutation } from "@apollo/client";

import { Redirect } from "react-router-dom";
import "./styles.css";

export default function List() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = (result) => {
    setResult(result);
  };

  function AddRecord() {
    const ADD_INPUT = gql`
      mutation($name: String!, $price: Int!, $barcode: String!) {
        addInput(name: $name, price: $price, barcode: $barcode) {
          response
        }
      }
    `;

    const [addInput, { data }] = useMutation(ADD_INPUT);

    const [inputName, setinputName] = useState({
      name: "",
      price: 0,
      barcode: result,
    });

    return (
      <>
        Add the name and the price:
        <input
          type="text"
          onChange={(e) =>
            setinputName({
              name: e.target.value,
              price: inputName.price,
              barcode: result,
            })
          }
          placeholder="Name"
        ></input>
        <input
          type="number"
          onChange={(e) =>
            setinputName({
              name: inputName.name,
              price: parseInt(e.target.value),
              barcode: result,
            })
          }
          placeholder="Price"
        ></input>
        <input
          type="submit"
          onClick={() => addInput({ variables: inputName })}
        ></input>
        {data ? (
          data.addInput.response === "added" ? (
            <Redirect to="records" />
          ) : (
            "error"
          )
        ) : (
          NaN
        )}
      </>
    );
  }
  return (
    <div className="App">
      Save your products. To start scann your barcode
      <p>{result ? result : "Scanning..."}</p>
      <button onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </button>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
      {result !== null ? <AddRecord /> : ""}
    </div>
  );
}
