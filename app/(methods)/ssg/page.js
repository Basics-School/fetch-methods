async function getData() {
  const res = await fetch('https://6388da71d94a7e5040a8c592.mockapi.io/users/users', {cache: 'force-cache'});
  return res.json();
}

export default async function Page() {
  const users = await getData();
  return(
    <>
    {users.map((e)=> <h1 key={e.id}>{e.name}</h1>)}    
    </>
  )
  // ...
}