import { useState, useEffect } from "react";

export const useTime = (): string => {
  const [time, setTime] = useState<string>("00:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedHours = hours % 12 || 12;
      const formattedTime = `${formattedHours}:${minutes < 10 ? "0" + minutes : minutes}`;
      setTime(formattedTime);
    };

    updateTime(); // Initial call
    const intervalId = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return time;
};
