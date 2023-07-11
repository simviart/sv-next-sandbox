export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  console.log('on recupere tous les posts pour préparer les path');

  const resJson = await res.json();

  return resJson.map((todo: { id: number }) => ({
    todoId: todo.id,
  }));
}

async function getOneTodo(todoid:number) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/"+todoid);

  return res.json();
}

export default async function Page({ params }: { params: { todoid: number } }) {
  const { todoid } = params;

  const onetodo: {
    title:string
  } = await getOneTodo(todoid); 

  console.log('dans le composant todo');


  return <h1>{onetodo.title}</h1>;
}
