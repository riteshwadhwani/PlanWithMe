import "./App.css";
import { Tours } from "./components/Tours";
import { useState } from "react";
import data from "./components/data";
function App() {
  const[tours,setTours]=useState(data);


  function removeTour(id){
      const newTours = tours.filter((tour) =>tour.id!==id)
      setTours(newTours);
  }
  if(tours.length==0){
    return (
      <div className="refresh">
        <div>Tours Not left</div>
        <button onClick={()=>{setTours(data)}}>Refresh</button>
      </div>
    )
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
