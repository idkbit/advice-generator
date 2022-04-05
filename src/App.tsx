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

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data: FetchData = await res.json();

    if (data.slip.id === slip?.id) {
      const slip = await fetchAdvice();
      if (slip) setSlip(slip);
      return;
    }

    setSlip(data.slip);
    return data.slip;
  };

  useEffect(() => {
    if (localStorage.getItem("advice")) return;

    fetchAdvice();
  }, []);

  return (
    <div className="App bg-neutralDB text-primaryLC min-h-screen">
      <button onClick={fetchAdvice}>roll advice</button>
      <div>
        <p className="text-primaryNG">Advice #{slip?.id}</p>
        <h1 className="text-xl">{slip?.advice}</h1>
      </div>
    </div>
  );
}

export default App;
