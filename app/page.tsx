import Link from "next/link";
import UnComp from "../components/UnComp";
import { MongoClient } from "mongodb";

async function getOneTodo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
 
  return res.json();
}

async function getAnything() {
  const client = await MongoClient.connect(process.env.ATLAS_URI);
  const db = client.db();

  const svCollec = db.collection("sv_test_collection");

  //const result = await svCollec.insertOne({title:'un troisieme test',num:8899999});
  const result = await svCollec.find().toArray();

  client.close();
  
  return result;
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

  const test = await getAnything();
  //const test = 'hey';

  //const allTodos: number[] = await getAllTodos(); 

  return (
    <>
      <UnComp uneProp="mùccemùm" uneSeconde={onetodo.title} />
      <ul>
      <li><Link href={`/todo/1`}>test</Link></li>
        {/* allTodos.map(todo => <li><Link href={`/todo/${todo}`}>{todo}</Link></li>) */}
      </ul>
      {test.map((untest, index) => <div key={index}>{untest.title} avec le num {untest.num}</div>)}
    </>
  );
}

