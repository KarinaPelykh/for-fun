import { useEffect, useState } from "react";
import { ToDoList } from "./components/ToDoList";
export type Task = { id: number; text: string; done: boolean };

function App() {
  const [data, setData] = useState<Task[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) {
          // throw new Error(res.status);
        }

        return res.json();
      })
      .then((data) => {
        if (data) {
          setIsLoading(false);
          setData(data);
        }
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      });
  }, []);

  return isError ? (
    <h1>Sorry, but you should reload page, thanks</h1>
  ) : isLoading ? (
    <p>Loading....</p>
  ) : (
    <ToDoList data={data} setData={setData} />
  );
}

export default App;
