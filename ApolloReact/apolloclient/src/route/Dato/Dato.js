import React, { useState, useEffect } from "react";
const IdToRender = require('./DatoIdToRender').default;

export default function Dato() {


  return (
    <>
      <IdToRender />
    </>
  );
}

//   const [idToRender, setidTorender] = useState("36");
//   const [functionToRender, setfunctionToRender] = useState("");

//   function RenderChild(props) {
//     console.log(props.child, "propsrender child");
//     useEffect(() => {
//       return props.child.map((x, index) => (
//         <>
//           <input type="button" key={index} value={x.Name} onClick={()=>setidTorender(x.ID)}></input>
//           <br></br>
//         </>
//       ));
//     }, [props.child])

//   }

//   function Funct(prop) {
//     console.log(prop, "prop");
//     const MemoRenderChild = useMemo(()=> RenderChild(prop.data.dato.child),[prop]);
//     return (
//       <>
//         <div>
//           <p>Name:{prop.data.dato.name}</p>
//           <p>Description:{prop.data.dato.Description}</p>
//           <p>Info:{prop.data.dato.info}</p>
//           <p>father{prop.data.dato.father}</p>
//         </div>
//         <MemoRenderChild />
//       </>
//     );
//   }
//   function FunctionIdToRender() {
//     const DATO = gql`
//       query dato($id: String) {
//         dato(id: $id) {
//           name
//           info
//           Description
//           father
//           child {
//             ID
//             Name
//           }
//         }
//       }
//     `;

//     const [getFields, { loading, data }] = useLazyQuery(DATO);
//     useEffect(() => {
//       getFields({ variables: { id: idToRender } })
//       if (data) {
//         console.log(data);
//         setfunctionToRender(<Funct data={data} />);
//       }
//     }, [data,getFields]);
//     return (
//       <input
//         type="button"
//         onClick={() => getFields({ variables: { id: idToRender } })}
//         value="Javascript"
//       ></input>
//     );
//   }
//   return (
//     <>
//       <div>
//         {functionToRender}
//         <FunctionIdToRender />
//       </div>
//     </>
//   );
// }
