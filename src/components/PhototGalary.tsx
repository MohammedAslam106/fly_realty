import { photoGallery } from "@/constants"
import Image from "next/image"

interface PhototGalaryProps {

}

export default function PhototGalary({ }: PhototGalaryProps) {
    return (
        <div className=' lg:block hidden'>
            <div className=" w-full flex justify-center items-center gap-10 my-[50px] flex-col">
                <h1 className=" w-full text-center text-[#474747] text-4xl font-semibold ">
                    PHOTO GALLERY
                </h1>
                <p className=" bg-red-600 h-1 w-24 text-center"></p>
            </div>
            <div className=" flex flex-wrap items-center w-full ">
                {
                    photoGallery.map((item, ind) => {
                        return (
                            <div key={ind} className="  w-[33.3%] h-80 overflow-hidden relative">
                                <div className=" photo-gallary w-full h-full relative" style={{
                                    backgroundImage:`url(${item.image})`,backgroundRepeat:'no-repeat', backgroundSize:'cover'
                                    }}>
                                </div>
                                <span className=" pointer-events-none absolute top-1/2 text-center w-full font-semibold text-white text-xl flex justify-center items-center ">{item.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}