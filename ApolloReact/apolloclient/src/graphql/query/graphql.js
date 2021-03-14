import { useQuery, gql } from "@apollo/client";

const USERS = gql`
  query user {
    test {
      name
      id
      surname
    }
  }
`;

export default function Users() {
  const { loading, error, data } = useQuery(USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.test.map((res) => (
    <p key={res.id} >
      <p className="smallContainer" >name:{res.name} surname:{res.surname}</p>
    </p>
  ));
}
