"use client";
import ImageComponent from "@/components/FeaturedImageComponent";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { newsEvents, singleFamilyHouses } from "@/constants";
import SingleFamily from "@/components/SingleFamily";
import TownHomes from "@/components/TownHomes";
import NewsEventsImageComponent from "@/components/NewsEventsImageComponent";
import Pagination from "@/components/Pagination";
import PhototGalary from "@/components/PhototGalary";
import DestinationHomes from "@/components/DestinationHomes";

export default function Home() {
  const [singleFamily, setSingleFamily] = useState<boolean>(true);
  const [startingIndex, setStartingIndex] = useState<number>(0)
  const [endingIndex, setEndingIndex] = useState<number>(3)
  return (
    <main className=" ">
      {/* container-1 */}
      <div
        id="container-1"
        className=" flex justify-center items-center max-sm:flex-col"
      >
        <div
          id="container-1-image-1"
          className=" relative flex lg:flex-col lg:justify-center lg:items-center justify-between items-end gap-3 text-white lg:h-[400px] h-[300px]"
        >
          <h1 className=" text-2xl font-bold z-10 p-5">SINGLE FAMILY HOMES</h1>
          <p className=" lg:block hidden text-lg z-10">
            Find Your New Homes Today
          </p>
          <button className=" my-5 rounded-full size-8 p-2 bg-red-600 z-10 mr-5">
            <FaArrowRight size={15} color="white" />
          </button>
          <div className=" absolute left-0 right-0 top-0 bottom-0 bg-black opacity-20 hover:opacity-0 transition-all"></div>
        </div>
        <div
          id="container-1-image-2"
          className=" relative flex lg:flex-col lg:justify-center lg:items-center justify-between items-end gap-3 text-white lg:h-[400px] h-[300px]"
        >
          <h1 className=" text-2xl font-bold z-10 p-5">SINGLE FAMILY HOMES</h1>
          <p className=" lg:block hidden text-lg z-10">
            Find Your New Homes Today
          </p>
          <button className=" my-5 rounded-full size-8 p-2 bg-red-600 z-10 mr-5">
            <FaArrowRight size={15} color="white" />
          </button>
          <div className=" absolute left-0 right-0 top-0 bottom-0 bg-black opacity-20 hover:opacity-0 transition-all"></div>
        </div>
      </div>

      {/* container-2 */}

      <div className=" py-[120px] lg:block hidden mx-8">
        <div className=" w-full flex justify-center items-center gap-10 mb-[50px] flex-col">
          <h1 className=" w-full text-center text-[#474747] text-4xl font-semibold ">
            {singleFamily ? "FEATURED SINGLE FAMILY" : "FEATURED TOWNHOMES"}
          </h1>
          <p className=" bg-red-600 h-1 w-24 text-center"></p>
        </div>
        <div className=" flex justify-center items-center ">
          <button
            onClick={() => setSingleFamily(true)}
            disabled={singleFamily}
            type="button"
            style={{ letterSpacing: "2px" }}
            className=" bg-transparent disabled:bg-red-600 px-8 py-4 disabled:text-white font-semibold"
          >
            SINGLE FAMILY
          </button>
          <button
            onClick={() => setSingleFamily(false)}
            disabled={!singleFamily}
            type="button"
            style={{ letterSpacing: "2px" }}
            className=" bg-transparent disabled:bg-red-600 px-8 py-4 disabled:text-white font-semibold"
          >
            TOWN HOMES
          </button>
        </div>
        <>{singleFamily ? <SingleFamily /> : <TownHomes />}</>
      </div>
      {/* container 3 */}

      <div className=" py-[90px]">
        <div className=" w-full flex justify-center items-center gap-10 mb-[50px] flex-col">
          <h1 className=" w-full text-center text-[#474747] text-4xl font-semibold ">
            NEWS & EVENTS
          </h1>
          <p className=" bg-red-600 h-1 w-24 text-center"></p>
        </div>
        <div className=" max-lg:flex-col flex justify-center max-lg:items-center items-start gap-5 sm:mx-5 md:mx-28 px-4">
          {
            newsEvents.slice(startingIndex, endingIndex).map((news, ind) => {
              return (
                <NewsEventsImageComponent image={news.image} h1={news.h1} h2={news.h2} />
              )
            })
          }
        </div>
        <Pagination
          numberOfPost={newsEvents.length}
          startingIndex={startingIndex}
          endingIndex={endingIndex}
          postPerPage={3}
          setStartingIndex={setStartingIndex}
          setEndingIndex={setEndingIndex}
        />
        <div className="w-full grid place-content-center py-12">
          <button className=" bg-red-600 text-white px-8 py-3 font-semibold " type="button">VISIT OUR BLOG</button>
        </div>
      </div>

      {/* container 4 */}
      <div className=" relative flex max-lg:flex-col-reverse justify-center items-center ">
        <div id="container-4-image-1" className=" h-[70vh] sm:h-[50vh] md:h-[40vh] lg:h-[600px] w-[25%] max-lg:w-full"></div>
        <div id="container-4-image-2" className=" h-96 lg:h-[600px] w-[100%] max-lg:w-full">

        </div>
        <div className=" absolute bottom-10 lg:bottom-0 bg-white lg:left-28 px-10 py-7 lg:w-[50%] lg:h-[90%] w-[85%] border-2 border-l-[15px] border-l-[#B3A774] ">
          <h2 className=" text-[#474747] text-2xl font-light py-1">VISIT OUR</h2>
          <h1 className=" text-[#474747] text-5xl  py-2">DESIGN CENTER</h1>
          <p className=" text-[#474747] font-thin text-lg py-4 text-justify">
            Designing an interior space for your new home can be one of the most exciting parts of the building process, or for some, one of the more scary parts of the building process. Either way, to reduce the stress, our designers have systems in place that will help each buyer determine how to make their home fit their personality, style of living, and what upgrades are available in their budget. Our award-winning design center allows visitors to walk through finished kitchen and bath spaces as well as view exterior materials grouped together just as they would on a real home. Designers are available for set appointments and buyers are also able to set up times to review browse options on their own.
          </p>
          <button className=" flex justify-center items-center gap-1" type="button">
            <h1 className=" text-red-600 font-bold text-lg">
              LEARN MORE
            </h1>
            <FaArrowRight className=' text-red-600' />
          </button>
        </div>
      </div>

      {/* container 5 */}
      <div className=" relative flex flex-row-reverse max-lg:flex-col-reverse justify-center items-center ">
        <div id="container-5-image-2" className=" h-[70vh] sm:h-[50vh] md:h-[40vh] lg:h-[600px] w-[25%] max-lg:w-full"></div>
        <div id="container-5-image-1" className=" h-96 lg:h-[600px] w-[100%] max-lg:w-full">

        </div>
        <div className=" absolute bottom-10 lg:bottom-0 bg-white lg:right-28 px-10 py-7 lg:w-[50%] lg:h-[90%] w-[85%] border-2 border-r-[15px] border-r-[#B3A774] ">
          <h2 className=" text-[#474747] text-2xl font-light py-1">LEARN ABOUT </h2>
          <h1 className=" text-[#474747] text-5xl  py-2">OUR TOWNHOMES</h1>
          <p className=" text-[#474747] font-thin text-lg py-4 text-justify">
            We offer two and three-level townhomes in a number of different locations. Each townhome community has open green space that is cared for by a Homeowner Association. This allows our townhome buyer to think more about recreation in their free time instead of yard work. Whether you’re relocating, uninterested selecting all of your home features from scratch, or just have to get into a home sooner than later, we have options that fit many different circumstances. Look through our selection of inventory recently completed or close to being done, call us for an appointment to take a tour, and we’ll get you into the home you want lickety-split.
          </p>
          <button className=" flex justify-center items-center gap-1" type="button">
            <h1 className=" text-red-600 font-bold text-lg">
              LEARN MORE
            </h1>
            <FaArrowRight className=' text-red-600' />
          </button>
        </div>
      </div>

      {/* container 6 */}

      <div className=" relative flex max-lg:flex-col-reverse justify-center items-center ">
        <div id="container-4-image-1" className=" h-[70vh] sm:h-[50vh] md:h-[40vh] lg:h-[600px] w-[25%] max-lg:w-full"></div>
        <div id="container-6-image-2" className=" h-96 lg:h-[600px] w-[100%] max-lg:w-full">

        </div>
        <div className=" absolute bottom-14 bg-white lg:left-28 px-10 py-7 lg:w-[50%] lg:h-[80%] w-[85%] border-2 border-l-[15px] border-l-[#B3A774] ">
          <h2 className=" text-[#474747] text-2xl font-light py-1">EXPLORE </h2>
          <h1 className=" text-[#474747] text-5xl  py-2">WHERE WE BUILD</h1>
          <p className=" text-[#474747] font-thin text-lg py-4 text-justify">
            We don’t just build homes; each home we build makes up a larger community. We believe that building an exceptional home will not only benefit those living under that roof, but that it will lead to a stronger more lasting community. Our aim is to create communities that are inherently safe, connected to the surrounding environment, and foster the feel of a welcoming neighborhood.
          </p>
          <button className=" flex justify-center items-center gap-1" type="button">
            <h1 className=" text-red-600 font-bold text-lg">
              LEARN MORE
            </h1>
            <FaArrowRight className=' text-red-600' />
          </button>
        </div>
      </div>
      <PhototGalary />
      <DestinationHomes />
    </main>
  );
}
