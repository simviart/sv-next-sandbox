import Link from "next/link";
import UnComp from "../components/UnComp";

async function getOneTodo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
 
  return res.json();
}

async function getAllTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const resJson = await res.json();
  const resJsonOnlyId = await resJson.map((oneRes:{
    id: Number
  }) => oneRes.id);

  return resJsonOnlyId;
}

export default async function Page() {
  const onetodo: {
    title:string
  } = await getOneTodo(); 

  //const allTodos: number[] = await getAllTodos(); 

  return (
    <>
      <UnComp uneProp="mùccemùm" uneSeconde={onetodo.title} />
      <ul>
      <li><Link href={`/todo/1`}>test</Link></li>
        {/* allTodos.map(todo => <li><Link href={`/todo/${todo}`}>{todo}</Link></li>) */}
      </ul>
    </>
  );
}