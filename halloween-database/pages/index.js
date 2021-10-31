import { useState, useEffect } from "react";

export default function Home() {
  //https://blog.logrocket.com/building-a-fullstack-application-with-next-js-and-firestore-db/
  let teams = [
    {
      id: 1,
      points: 0,
    },
    {
      id: 2,
      points: 0,
    },
    {
      id: 3,
      points: 0,
    },
    {
      id: 4,
      points: 0,
    },
    {
      id: 5,
      points: 0,
    },
    {
      id: 6,
      points: 0,
    },
  ];
  const [data, setData] = useState(teams);

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

  useEffect(() => {
    //console.log(data);
  }, [data]);
  return (
    <div className="flex flex-wrap justify-center space-x-4">
      {data == undefined ? (
        <p>Loading Cards</p>
      ) : (
        data.map((item, index) => (
          <div
            key={index}
            className="max-w-md px-8 py-4 my-20 bg-white rounded-lg shadow-lg"
          >
            <h1>Team # {index + 1}</h1>
            <h2>Points: {item.points}</h2>
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
          </div>
        ))
      )}
    </div>
  );
}
