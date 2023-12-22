import Image from "next/image";

interface pageProps {

}

export default function page({ }: pageProps) {
    return (
        <div className=''>
            <div className=" lg:block hidden">
                <div className=" bg-white w-full flex justify-center ic gap-2 shadow-md py-5 border-b-2">
                    <button className=" bg-red-600 text-white font-bold text-2xl px-8 py-5">CONTACT US</button>
                    <button className=" font-bold text-2xl px-8 py-5">CAREERS</button>
                    <button className=" font-bold text-2xl px-8 py-5">WARRANTY REQUEST</button>
                    <button className=" font-bold text-2xl px-8 py-5">BECOME A TRADE PARTNER</button>
                </div>
            </div>
            <div className=" lg:hidden block">
                <div className=" z-50 -mt-5 font-bold text-2xl bg-white text-[#474747] w-full flex justify-center gap-2 shadow-md pb-5 border-b-2">
                    <h1>CONTACT MENU </h1>
                </div>
            </div>
            <div className=" bg-gray-100 py-20 px-10 w-full flex max-lg:flex-col-reverse justify-center items-center gap-20">
                <div className=" w-full">
                    <div className=" w-full flex justify-start gap-5 flex-col">
                        <h1 className="  text-[#474747] text-4xl font-semibold ">
                            HAVE QUESTIONS? WE ARE HERE TO HELP!
                        </h1>
                        <p className=" bg-red-600 h-1 w-24 text-center"></p>
                        <p className=" text-lg font-light">
                            Have a question about a floor plan or community? Ready to schedule a visit? We are here to help at any stage in your new home search process whether you need a home now or just starting to look. Searching for your new home should be fun and exciting! We are here to help with that. Fill out the contact form below or simply call at 801-917-5449.
                        </p>
                    </div>
                </div>
                <Image className=" max-lg:w-full w-1/2 object-contain" unoptimized width={100} height={100} src={'https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC83M2Q3NjdiOWM1MDczZjhmMjI2N2ExYjBhNjFlYWFjMS5qcGVn/webp/1200/1200'} alt="cont" />
            </div>
            <div className=" w-full flex justify-center items-center gap-5 flex-col py-20">
                <h1 className="  text-[#474747] text-4xl font-semibold ">
                    CONTACT FORM
                </h1>
                <p className=" bg-red-600 h-1 w-24 text-center"></p>

            </div>

            <ul className=" px-52 max-lg:px-10 flex flex-col justify-between gap-10">
                <li className=" flex justify-center items-center gap-5 ">
                    <label className=" w-full">
                        First Name*
                        <input type="text" className=" border border-gray-200 px-2 py-2 rounded shadow-sm w-full" />
                    </label>
                    <label className=" w-full">
                        Last Name*
                        <input type="text" className=" border border-gray-200 px-2 py-2 rounded shadow-sm w-full" />
                    </label>
                </li>
                <li className=" flex justify-center items-center gap-5 ">
                    <label className=" w-full">
                        EMAIL
                        <input type="text" className=" border border-gray-200 px-2 py-2 rounded shadow-sm w-full" />
                    </label>
                    <label className=" w-full">
                        PHONE
                        <input type="text" className=" border border-gray-200 px-2 py-2 rounded shadow-sm w-full" />
                    </label>
                </li>
                <li className=" flex justify-center items-center gap-5 ">
                    <label className=" w-full">
                        CITY OF INTEREST
                        <select className=" border border-gray-200 px-2 py-2 rounded shadow-sm w-full" name="" id="">
                            <option value="">Select one...</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select></label>
                    <label className=" w-full">
                        COMMUNITY OF INTEREST
                        <select className=" border border-gray-200 px-2 py-2 rounded shadow-sm w-full" name="" id="">
                            <option value="">Select one...</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select></label>
                </li>
                <li>
                    <label className=" w-1/2">
                        HOW DID YOU HEAR ABOUT US <br />
                        <select className=" border border-gray-200 px-2 py-2 rounded shadow-sm w-1/2" name="" id="">
                            <option value="">Select one...</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select></label>
                </li>
                <li>
                    <label className=" w-full">
                        COMMENTS/QUESTIONS*
                        <textarea className=" border border-gray-200 px-2 py-2 rounded shadow-sm w-full"></textarea>
                    </label>
                </li>
                <button className=" bg-red-600 px-8 py-3 w-fit text-white font-bold ">SUBMIT</button>
            </ul>
            <div className=" flex justify-center items-center max-lg:flex-col gap-4 my-28">
                <div className=" bg-gray-100 px-32 py-6 w-fit flex flex-col justify-center items-center gap-2">
                    <h1 className=" font-semibold text-xl text-center">
                        CORPORATE OFFICE
                    </h1>
                    <h1 className=" font-semibold text-lg text-center">
                        9350 150 E #220, Sandy, UT 84070
                    </h1>
                    <p className=" bg-red-600 h-1 w-20"></p>
                    <p className=" text-center">
                        P: (801) 593-9993 <br />
                        F: (801) 593-9992
                    </p>
                    <h1 className=" font-semibold text-lg text-center">
                        GET DIRECTIONS
                    </h1>
                </div>
                <div className=" bg-gray-100 px-32 py-6 w-fit flex flex-col justify-center items-center gap-2">
                    <h1 className=" font-semibold text-xl text-center">
                        CORPORATE OFFICE
                    </h1>
                    <h1 className=" font-semibold text-lg text-center">
                        9350 150 E #220, Sandy, UT 84070
                    </h1>
                    <p className=" bg-red-600 h-1 w-20 text-center"></p>
                    <p className=" text-center">
                        P: (801) 593-9993 <br />
                        F: (801) 593-9992
                    </p>
                    <h1 className=" font-semibold text-lg text-center">
                        GET DIRECTIONS
                    </h1>
                </div>
            </div>
            <div className=" overflow-hidden py-32 px-20 gap-3 flex max-lg:px-0 max-lg:flex-col w-full justify-center items-center">
                <div className=" w-[33.3%] max-lg:w-full overflow-hidden relative">
                    <Image unoptimized className="scaled-image" width={100} height={100} alt="home" src={'https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC84OGZiNGRlNzQyODA2ZTZkODdhY2M3MDQ2NjUwM2Q4ZS5qcGVn/webp/1200/1200'} />
                </div>
                <div className=" w-[33.3%] max-lg:w-full  overflow-hidden relative">
                    <Image unoptimized className="scaled-image" width={100} height={100} alt="home" src={'https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC83YmQ3ZmY1MmE4M2VmNjlmZWQ3OGI2M2Q2ZmU0MjE3NC5qcGVn/webp/1200/1200'} />
                </div>
                <div className=" w-[33.3%] max-lg:w-full  overflow-hidden relative">
                    <Image unoptimized className="scaled-image" width={100} height={100} alt="home" src={'https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9lMzViMmQwZDUxYTIzY2FmNmM4MmYyMDMwMDA0MTdkZC5wbmc=/webp/1200/1200'} />
                </div>

            </div>
        </div>
    )
}