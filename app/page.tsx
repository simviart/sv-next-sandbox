import UnComp from "../components/UnComp";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
 
  return res.json();
}

export default async function Page() {
  const data = await getData(); 

  return (
    <>
      <UnComp uneProp="mùccemùm" uneSeconde={data.title} />
    </>
  );
}