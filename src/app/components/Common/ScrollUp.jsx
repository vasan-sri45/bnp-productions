import { useEffect } from "react";

const ScrollUp = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return null;
};

export default ScrollUp;
