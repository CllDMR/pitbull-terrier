import Head from "next/head";
import { FC } from "react";
import { useGetTasksQuery } from "src/generated/graphql";

const MyQueryQuery: FC = () => {
  const { loading, error, data } = useGetTasksQuery();

  if (loading) return <pre>Loading</pre>;
  if (error)
    return (
      <pre>
        Error in MY_QUERY_QUERY
        {JSON.stringify(error, null, 2)}
      </pre>
    );

  if (data) {
    const tasks = data.queryTask;
    return (
      <div>
        {tasks.map((task) => (
          <p>
            {task.__typename} {task.id} - {task.title} - {task.completed}
          </p>
        ))}
      </div>
    );
  }
  return <h1>Nothing</h1>;
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1>aslşdkaskdşn</h1>
        <MyQueryQuery />
      </main>

      <footer></footer>
    </div>
  );
}
