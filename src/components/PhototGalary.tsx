import Image from "next/image"

interface PhototGalaryProps{
    
}

export default function PhototGalary({}:PhototGalaryProps ){
    return(
        <div className=' lg:block hidden'>
            <div className=" w-full flex justify-center items-center gap-10 my-[50px] flex-col">
                <h1 className=" w-full text-center text-[#474747] text-4xl font-semibold ">
                PHOTO GALLERY
                </h1>
                <p className=" bg-red-600 h-1 w-24 text-center"></p>
            </div>
            <div className=" flex flex-wrap items-center w-full ">
                {
                    Array(7).fill(0).map((item,ind)=>{
                        return(
                            <div key={ind} className=" w-[33.3%]  overflow-hidden relative">
                                <Image className="  scaled-image" unoptimized  alt="image" src={'https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC83MmJkZDNjNDc1ZjI0ZWJhODVkNjNmMzVlMTFjNWFiMi5qcGVn/webp/800/600'} width={100} height={100}/>
                            </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}