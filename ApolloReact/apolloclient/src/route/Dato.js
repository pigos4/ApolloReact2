import React, { useState, useEffect } from "react";
import { gql, useMutation, useLazyQuery } from "@apollo/client";

export default function Dato() {
  const [idToRender,setidTorender]=useState("36")
  const [functionToRender, setfunctionToRender] = useState("");
  
  function RenderChild(props) {
    console.log(props.child, "propsrender child");
    return props.child.map((x, index) => (
      <>
        <input type="button" key={index} value={x.Name}></input>
        <br></br>
      </>
    ));
  }

  function Funct(prop) {
    console.log(prop, "prop");
    return (
      <>
        <div>
          <p>Name:{prop.data.dato.name}</p>
          <p>Description:{prop.data.dato.Description}</p>
          <p>Info:{prop.data.dato.info}</p>
          <p>father{prop.data.dato.father}</p>
        </div>
        <RenderChild child={prop.data.dato.child} />
      </>
    );
  }

  const DATO = gql`
    query dato($id: String) {
      dato(id: $id) {
        name
        info
        Description
        father
        child {
          ID
          Name
        }
      }
    }
  `;

  const [getFields, { loading, data }] = useLazyQuery(DATO);
  useEffect(() => {
    if (data) {
      console.log(data);
      setfunctionToRender(<Funct data={data} />);
    }
  }, [data]);

  return (
    <>
      <div>
        {functionToRender}
        <input
          type="button"
          onClick={() => getFields({ variables: { id: idToRender } })}
          value="Javascript"
        ></input>
      </div>
    </>
  );
}
