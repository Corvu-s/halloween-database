import { useState, useEffect } from "react";
export default function Home() {
  //https://blog.logrocket.com/building-a-fullstack-application-with-next-js-and-firestore-db/
  let teams = [
    {
      id: 1,
      points: 0,
      name: "",
    },
    {
      id: 2,
      points: 0,
      name: "",
    },
    {
      id: 3,
      points: 0,
      name: "",
    },
    {
      id: 4,
      points: 0,
      name: "",
    },
    {
      id: 5,
      points: 0,
      name: "",
    },
    {
      id: 6,
      points: 0,
      name: "",
    },
  ];
  const [data, setData] = useState(teams);
  const [name, setName] = useState("");
  function handleIncrease(id) {
    //console.log("increase team  " + id);
    let tempState = [...data];
    let tempElement = { ...tempState[id - 1] };
    tempElement.points = tempElement.points + 1;
    tempState[id - 1] = tempElement;
    setData(tempState);
  }

  function handleDecrease(id) {
    //console.log("decrease team  " + id);
    let tempState = [...data];
    let tempElement = { ...tempState[id - 1] };
    if (tempElement.points >= 1) {
      tempElement.points = tempElement.points - 1;
      tempState[id - 1] = tempElement;
      setData(tempState);
    }
  }
  function handleNameChange(id) {
    console.log("change team " + id + " to" + name);
    let tempState = [...data];
    let tempElement = { ...tempState[id - 1] };
    tempElement.name = name;
    tempState[id - 1] = tempElement;
    setData(tempState);
    setName("");
  }

  useEffect(() => {
    //console.log(data);
  }, []);
  return (
    <div className="flex flex-wrap justify-center space-x-4">
      {data == undefined ? (
        <p>Loading Teams</p>
      ) : (
        data.map((item, index) => (
          <div
            key={index}
            className="max-w-md px-8 py-4 my-20 bg-white rounded-lg shadow-lg"
          >
            <h1 className="text-3xl">
              Team # {index + 1} - {item.name}
            </h1>
            <h2 className="text-xl">Points: {item.points}</h2>
            <button
              onClick={() => handleIncrease(index + 1)}
              className="bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded"
            >
              Add Points
            </button>
            <button
              onClick={() => handleDecrease(index + 1)}
              className="bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 rounded"
            >
              Remove Points
            </button>
            <button
              onClick={() => handleNameChange(index + 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded"
            >
              Change Team Name
            </button>
            <input
              type="text"
              id={index}
              value={name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="change name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        ))
      )}
    </div>
  );
}
