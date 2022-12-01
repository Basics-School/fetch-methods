import { useEffect, useState } from 'react';

export default function ClientSideRendered() {
  const [state, setState] = useState([]);

  async function getData() {
    const res = await fetch('https://6388da71d94a7e5040a8c592.mockapi.io/users/users');
    const users = await res.json();
    setState(users);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}