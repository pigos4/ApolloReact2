import React, { useState, useEffect } from "react";
import { gql, useMutation, useLazyQuery } from "@apollo/client";
const addNewTopic = require('./AddNewTopic').default;
export default function Dato() {
    const [newTopic,setNewTopic]=useState()

    const [idToRende, setidTorender] = useState("36");
  const [functionToRender, setfunctionToRender] = useState("");
    function Funct(prop) {
        console.log(prop, "prop");
        return (
          <>
            <div>
              <p>Name:{prop.data.dato.name}</p>
              <p>Description:{prop.data.dato.Description}</p>
              <p>Info:{prop.data.dato.info}</p>
              <p>father{prop.data.dato.father}</p>
              {prop.data.dato.child.map((x, index) => (
                  <input
                    type="button"
                    key={index}
                    value={x.Name}
                    onClick={() => setidTorender(`${x.ID}`)}
                  ></input>
              ))}
            </div>
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
          getFields({ variables: { id: idToRende } });
         
          if (data) {
            console.log(data);
            setfunctionToRender(<Funct data={data} />);
          }
          return () => {
            
          getFields({ variables: { id: idToRende } });
          if (data) {
            console.log(data);
            setfunctionToRender(<Funct data={data} />);
          }
        };
        
        }, [data, getFields, idToRende]);
        return <>{functionToRender}{idToRende}
        <div>
                <input type="text" onChange={(e)=>setNewTopic({ ...newTopic, name: e.target.value })}></input>
                <input type="text" onChange={(e)=>setNewTopic({ ...newTopic, Description: e.target.value })}></input>
                <input type="text" onChange={(e)=>setNewTopic({ ...newTopic, info: e.target.value })}></input>
                <input type="submit" onClick={()=>addNewTopic(newTopic)}placeholder="Submit"></input>
               


              </div>
        </>;
      }
      
    
      


