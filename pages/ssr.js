export default function ServerSideRendered({ users }) {
  return (
    <>
      {users.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://6388da71d94a7e5040a8c592.mockapi.io/users/users');
  const users = await res.json();

  return {
    props: {
      users, // will be passed to the page component as props
    },
  };
}