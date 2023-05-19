import axios from "axios";
import { useState, useEffect } from "react";
import { BicyclesIndex } from "./BicyclesIndex";
import { BicyclesNew } from "./BicyclesNew";

export function Content() {

  const [bicycles, setBicycles] = useState([]);

  const handleIndexBicycles = () => {
    console.log("handleIndexBicycles");
    axios.get("http://localhost:3000/bicycles.json").then((response) => {
      console.log(response.data);
      setBicycles(response.data);
    });
  };
  const handleCreateBicycle = (params, successCallback) => {
    console.log("handleCreateBicycle", params);
    axios.post("http://localhost:3000/bicycles.json", params).then((response) => {
      setBicycles([...bicycles, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexBicycles, []);

    return (
      <div>
        <BicyclesNew/>
        <BicyclesIndex bicycles={bicycles} />
      </div>
    );
}