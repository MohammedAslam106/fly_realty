import Image from "next/image";
import { BiSolidDirectionRight } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

interface ImageComponentProps {
    image: string,
    rate: string,
    h1: string,
    h2: string,
    h3: string,
    redText: string,
    beds: string,
    baths: string,
    sqft: string,
    timings?: string,
    status?: string
}

export default function ImageComponent({ image, rate, h1, h2, h3, redText, beds, baths, sqft, timings, status }: ImageComponentProps) {
    return (
        <>
            <div id="image-box" className="w-[340px] rounded shadow-2xl h-full ">
                <div className=" relative">
                    <Image unoptimized className=" w-full" alt="homes" src={image} width={100} height={100} />
                    {status && <Image alt="sold-tag" src={'https://www.destinationhomes.com/images/sold.png'} width={100} height={100} className="  absolute top-0 right-0 " />}
                    {timings && <span className=" absolute left-0 bottom-0 bg-red-600 text-white font-semibold px-3 py-1">{timings}</span>}
                </div>
                <div className=" px-5 py-5 flex flex-col justify-center  gap-8">
                    <div className=" flex justify-between items-center gap-2 border-b border-gray-300 pb-6">
                        <div className=" text-lg">
                            <h1 className=" font-semibold">{h1}</h1>
                            <h2 className=" font-light">{h2}</h2>
                            <h3 className=" font-light">{h3}</h3>
                        </div>
                        <div className=" flex justify-center items-center gap-5 text-lg font-semibold">
                            <BiSolidDirectionRight size={30} className='text-red-600' />
                            <h1 className=" bg-gray-200 px-3 py-2 rounded">${rate}</h1>
                        </div>
                    </div>
                    <div className=" text-red-600 font-semibold border-b border-gray-300 pb-6">
                        {redText}
                    </div>
                    <div className=" flex justify-between items-center gap-3 pb-6">
                        <div className=" flex justify-center items-center gap-3">
                            <div className=" flex flex-col justify-center items-center gap-3">
                                <Image className=" w-7 h-6" alt="beds" width={100} height={100} src={'https://www.destinationhomes.com/images/icon-beds.svg'} />
                                <h2>{beds} BEDS</h2>
                            </div>
                            <div className=" flex flex-col justify-center items-center gap-3">
                                <Image className=" w-7 h-6" alt="beds" width={100} height={100} src={'https://www.destinationhomes.com/images/icon-baths.svg'} />
                                <h2>{baths} BATHS</h2>
                            </div>
                            <div className=" flex flex-col justify-center items-center gap-3">
                                <Image className=" w-7 h-6" alt="beds" width={100} height={100} src={'https://www.destinationhomes.com/images/icon-sqft.svg'} />
                                <h2>{sqft} SQFT</h2>
                            </div>
                        </div>
                        <button className=' rounded-full size-14 p-4 bg-red-600 z-10 mr-5'>
                            <FaArrowRight size={24} color='white' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


