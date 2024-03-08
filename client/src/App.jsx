import { useEffect, useState } from "react";
import Card from "./components/Card.jsx";
import { useForm } from "react-hook-form";
function App() {
  const { handleSubmit, register } = useForm();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetch("http://localhost:4000/books/");
      const finalData = await fetchedData.json();
      setData(finalData);
    };
    getData();
  }, []);

  // send Data
  const sendData = async (data) => {
    const fetchedData = await fetch("http://localhost:4000/books/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-5 m-5 rounded">
        {data.map((val) => {
          return (
            <Card
              name={val.name}
              author={val.author}
              desc={val.desc}
              key={val.id}
            />
          );
        })}
      </div>
      <form
        className="bg-gray-300 max-w-xl mx-auto p-5 space-y-5"
        onSubmit={handleSubmit(sendData)}
      >
        <div>
          <label className="block">Book Name</label>
          <input
            type="text"
            className="px-4 py-1 rounded w-full"
            name="name"
            {...register("name")}
          />
        </div>
        <div>
          <label className="block">Author</label>
          <input
            type="text"
            name="author"
            className="px-4 py-1 rounded w-full"
            {...register("author")}
          />
        </div>
        <div>
          <label className="block">Desccription</label>
          <input
            type="text"
            name="desc"
            className="px-4 py-1 rounded w-full"
            {...register("desc")}
          />
        </div>
        <button className="bg-blue-600 px-4 py-1 w-full">Add</button>
      </form>
    </div>
  );
}

export default App;
