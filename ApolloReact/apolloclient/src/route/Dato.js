import React, { useState, useEffect } from "react";
import { gql, useMutation, useLazyQuery } from "@apollo/client";

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
  if (renderDataLoading === null)
    getFields({ variables: { id: inputsUser.id } });

  useEffect(() => {
    loading
      ? setrenderDataLoading(
          <>
            <p>loading</p>
          </>
        )
      : setrenderDataLoading(<></>);

    if (data) {
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
        value="Submit"
      ></input>

      
      {renderDataLoading}
    </>
  );
}



