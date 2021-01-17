import {  useQuery, gql } from '@apollo/client';

const USERS=gql`

query user {ciao{nome
id
cognome}}
  `;

export default function Users() {
 
   const { loading, error, data } = useQuery(USERS);
   if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data)
   return  data.ciao.map((res)=><p key={res.id}>nome:{res.nome} cognome:{res.cognome}</p>)
 
}
