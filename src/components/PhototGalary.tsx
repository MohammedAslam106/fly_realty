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
                            <div key={ind} className="  w-[33.3%] h-96 overflow-hidden relative">
                                <Image className="  scaled-image h-96" unoptimized alt="image" src={item.image} width={100} height={100} />
                                <span className=" image-tag absolute top-0 left-0 right-0 bottom-0 text-white font-semibold flex justify-center items-center">{item.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}