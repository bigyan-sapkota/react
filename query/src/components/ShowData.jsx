import { useQuery } from "@tanstack/react-query";

const ShowData = () => {
  //   const [err, setErr] = useState("");
  //   try {
  //     (async function fetchData() {
  //       const data = await Axios.get(
  //         "https://jsonplaceholder.typicode.com/todos"
  //       ).then((res) => res);
  //       console.log(data);
  //     })();
  //   } catch (error) {
  //     setErr(error);
  //   }

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
    select: (data) => data.map((todo) => ({ id: todo.id, title: todo.title })),
  });

  //   const { data: users } = useQuery({
  //     queryKey: ["users"],
  //     queryFn: () =>
  //       Axios.get("https://jsonplaceholder.typicode.com/users").then(
  //         (res) => res
  //       ),
  //     select: (users = users.map((user) => ({ id: user.id, name: user.name }))),
  //   });

  if (isLoading) return <pre className="text-6xl">Loading...</pre>;

  if (isError)
    return <pre className="text-red-600 font-semibold">Error occoured</pre>;

  return (
    <div>
      {todos.slice(0, 5).map((todo, i) => (
        <div key={i}>
          {todo.id}.{todo.title}
        </div>
      ))}
    </div>
  );
};

export default ShowData;
