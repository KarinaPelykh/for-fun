// import { useEffect, useState } from "react";
// import { ToDoList } from "./components/ToDoList";
// import { UserProfile } from "./components/UserProfile";
// import { Gallery } from "./components/Gallery";
// import { Movie } from "./components/movie/Movie";
import { NotesBoard } from "./components/notes-board/NotesBoard";
import "./index.css";
export type Task = { id: number; text: string; done: boolean };

function App() {
  // const [data, setData] = useState<Task[]>([]);

  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((res) => {
  //       if (!res.ok) {
  //         // throw new Error(res.status);
  //       }

  //       return res.json();
  //     })
  //     .then((data) => {
  //       if (data) {
  //         setIsLoading(false);
  //         setData(data);
  //       }
  //     })
  //     .catch((error) => {
  //       setIsError(true);
  //       console.log(error);
  //     });
  // }, []);

  // const isEvery = data.every((item) => item.done);
  // return isError ? (
  //   <h1>Sorry, but you should reload page, thanks</h1>
  // ) : isLoading ? (
  //   <p>Loading....</p>
  // ) : (
  return (
    <>
      <NotesBoard />
      {/* <Gallery /> */}
      {/* <Movie /> */}
      {/* <button>
        Selected all
        <input
          type="checkbox"
          checked={isEvery}
          onChange={() =>
            setData((prev) =>
              prev.map((task) => ({ ...task, done: !task.done })),
            )
          }
        />
      </button>
      <ToDoList data={data} setData={setData} />
      <UserProfile /> */}
    </>
  );
  // );
}

export default App;
