import { useEffect, useState } from "react";
import { FilterCatsMobile } from "../ FilterCatsMobile/FilterCatsMobile";
import { FilterCatsDesktop } from "../FilterCatsDesktop/FilterCatsDesktop";

export const FilterCats = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const WIDTHMOBILE = 900;

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {
          width < WIDTHMOBILE ? 
            <FilterCatsMobile />
            : 
            <FilterCatsDesktop />
        }
    </>
  )
}
