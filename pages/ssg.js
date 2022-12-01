export default function StaticSiteGeneration({ data }) {
  return (
    <>
      {data.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const res = await fetch('https://6388da71d94a7e5040a8c592.mockapi.io/users/users');
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}