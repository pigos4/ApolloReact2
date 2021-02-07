import React, { useState} from "react";
import Scanner from "./components/Scanner";
import "./styles.css";   

export default function List (){

      const [camera, setCamera] = useState(false);
      const [result, setResult] = useState(null);

      const onDetected = result => {
        setResult(result);
      };
      
      
      function AddRecord(){

        const [inputName, setinputName ] =useState("");
        const [inputPrice, setinputPrice ] =useState(NaN);
        return(<>
        <input type="text" onChange={(e)=>setinputName(e.target.value)} placeholder="Name"></input>
        <input type="number" onChange={(e)=>setinputPrice(e.target.value)} placeholder="Price"></input>
        <input type="submit" onClick={()=>console.log(inputName, inputPrice)}></input>
        
        </>)
      }
    
      return (
        <div className="App">
          <p>{result ? result : "Scanning..."}</p>
         
          <button onClick={() => setCamera(!camera)}>
            {camera ? "Stop" : "Start"}
          </button>
          <div className="container">
            {camera && <Scanner onDetected={onDetected} />}
          </div>
          <AddRecord/>
        </div>
      );
    }




