"use client";

import { townHomes } from "@/constants";
import ImageComponent from "./FeaturedImageComponent";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

interface SingleFamilyProps {}

export default function SingleFamily({}: SingleFamilyProps) {
  const [startingIndex, setStartingIndex] = useState<number>(0);
  const [endingIndex, setEndingIndex] = useState<number>(0);

  useEffect(() => {
    setEndingIndex(3);
  }, []);
  return (
    <>
      <div className=" flex flex-wrap justify-center items-center gap-10 mt-10 mx-5">
        {townHomes.slice(startingIndex, endingIndex).map((house, ind) => {
          return (
            <ImageComponent
              status={house.status}
              h1={house.h1}
              h2={house.h2}
              h3={house.h3}
              rate={house.rate}
              redText={house.redText}
              image={house.image}
              baths={house.bath}
              beds={house.beds}
              sqft={house.sqft}
            />
          );
        })}
      </div>
      <Pagination
        numberOfPost={townHomes.length}
        startingIndex={startingIndex}
        endingIndex={endingIndex}
        postPerPage={3}
        setStartingIndex={setStartingIndex}
        setEndingIndex={setEndingIndex}
      />
    </>
  );
}
