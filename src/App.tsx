import { useEffect } from "react";
import Advice from "./components/Advice";
import { useLocalStorage } from "./hooks";

export interface FetchData {
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

  const fetchAdvice = async (): Promise<FetchData["slip"]> => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data: FetchData = await res.json();

    if (data.slip.id === slip?.id) {
      const slip = await fetchAdvice();
      if (slip) setSlip(slip);
    } else {
      setSlip(data.slip);
    }

    return data.slip;
  };

  useEffect(() => {
    if (localStorage.getItem("advice")) return;

    fetchAdvice();
  }, []);

  return (
    <div className="App bg-neutralDB text-primaryLC min-h-screen flex justify-center items-center">
      <Advice slip={slip} fetchAdvice={fetchAdvice} />
    </div>
  );
}

export default App;
