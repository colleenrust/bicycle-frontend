import axios from "axios";
import { useState, useEffect } from "react";
import { BicyclesIndex } from "./BicyclesIndex";

export function Content() {

  const [bicycles, setBicycles] = useState([]);

  const handleIndexBicycles = () => {
    console.log("handleIndexBicycles");
    axios.get("http://localhost:3000/bicycles.json").then((response) => {
      console.log(response.data);
      setBicycles(response.data);
    });
  };

  useEffect(handleIndexBicycles, []);

    return (
      <div>
        <BicyclesIndex bicycles={bicycles} />
      </div>
    );
}