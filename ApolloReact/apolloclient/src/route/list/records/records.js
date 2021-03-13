import { useQuery, gql } from "@apollo/client";

const RECORDS = gql`
  query{records{nome
  id
  price
  barcode
  }}
`;

export default function Records() {
  const { loading, error, data } = useQuery(RECORDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if(data )console.log(data);
  return data.records.map((res) => (
    <p key={res.id}>
        id:{res.id}
      nome:{res.nome} Price:{res.price} Barcode:{res.barcode}
    </p>
  ));
}
