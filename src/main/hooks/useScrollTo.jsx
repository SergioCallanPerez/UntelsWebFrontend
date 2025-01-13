import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const useScrollTo = (searchName, searchParam) => {
  const [searchParams] = useSearchParams(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && searchParams.get(searchName) === searchParam) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams, searchName, searchParam]);

  return ref;
};

export default useScrollTo;
