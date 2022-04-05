import { useEffect, useState } from "react";
import { useLocalStorage } from "./hooks";

interface FetchData {
  slip: {
    advice: string;
    id: number;
  };
}

function App() {
  const [slip, setSlip] = useLocalStorage<FetchData["slip"] | null>(
    "advice",
    null
  );

  useEffect(() => {
    if (localStorage.getItem("advice")) return;
    const fetchAdvice = async () => {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data: FetchData = await res.json();

      setSlip(data.slip);
    };
    fetchAdvice();
  }, []);

  return <div className="App text-8xl text-primaryNG text-qoute">app</div>;
}

export default App;
