"use client"
import { useState } from "react";
export default function Home() { 
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  };
return(
  <div>
    <h1>Contador</h1>
    <p>Número atual: {count}</p>
    <button className="bg-white px-2 font-bold hover:bg-black hover:text-white hover:border-black border-2 rounded" onClick= {handleClick}>+</button>
  </div>
)
}
