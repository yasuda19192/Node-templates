import React,{useState} from "react";

const Points =({point}) => {
  const [points, setPoints] = useState(0);
    function handleState(){ 
      setPoints( points + 1);
    }
  return <p>{points}</p>;
};

export default Points;
