import { useQuery, gql, useMutation } from "@apollo/client";
import { Redirect } from "react-router-dom";
import './records.css';

function Delete(props) {
  const DELETE_ITEM = gql`
    mutation($idd: String!) {
      deleteitem(idd: $idd) {
        status
      }
    }
  `;

  const [deletionStatus, { data }] = useMutation(DELETE_ITEM);
  if (data) {
    if (data.deleteitem.status) {
      return (
        <>
          <Redirect to={"/records"} />
        </>
      );
    }
  } else {
    return (
      <>
        <input
          type="button"
          onClick={() => deletionStatus({ variables: props })}
          value="Delete"
        ></input>
      </>
    );
  }
}

const RECORDS = gql`
  query {
    records {
      nome
      id
      price
      barcode
    }
  }
`;

export default function Records() {
  const { loading, error, data } = useQuery(RECORDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {data.records.map((res) => (
        <p key={res.id} className="par">
          <Delete idd={res.id} />
          <p>Name:{res.nome}</p>
          <p>id:{res.id}</p>

          <p>Price:{res.price}</p> <p>Barcode:{res.barcode}</p>
        </p>
      ))}
    </>
  );
}
