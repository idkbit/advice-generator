import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, value: T) => {
  const [state, setState] = useState<T>(value);

  useEffect(() => {
    const inLocalStorage = localStorage.getItem(key);
    if (inLocalStorage) {
      setState(JSON.parse(inLocalStorage));
    } else if (value) {
      localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    }
  }, []);

  useEffect(() => {
    if (state) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state]);

  return [state, setState] as const;
};
