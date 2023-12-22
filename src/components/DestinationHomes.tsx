import Image from "next/image";

interface DestinationHomesProps{
    
}

export default function DestinationHomes({}:DestinationHomesProps ){
    return(
        <div id="container-4-image-1" className=' w-full lg:block hidden px-14 my-10 '>
            <div className=" flex justify-center items-center h-[100vh] w-full px-20 bg-white shadow-xl">
                <div className=" w-full flex justify-center items-center gap-10 mb-[50px] flex-col">
                    <h1 className=" w-full text-left text-[#474747] text-5xl font-semibold ">
                    DESTINATION HOMES INVITES TO ADD YOUR STORY
                    </h1>
                    <p className=" font-thin text-lg px-5 py-2 ">Destination Homes recognizes how important it is to build exceptional homes in lasting communities. We also recognize that designing communities is only a fraction of what brings a neighborhood to life. The key ingredient to a vibrant community is the homeowner. We aim to build the perfect setting that is safe, connected and appealing so that each of our buyers can bring their personalities, their hobbies, their families and their energy to the homes, the parks and the streets.</p>
                    <button className=" bg-red-600 text-white px-6 py-2 float-left font-bold">LEARN MORE</button>
                </div>
                <Image className=" w-[60%] h-full object-cover" unoptimized alt="home" src={'https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8wZmE3M2Y1Zjg0M2JiNjI1NjY5MTQyNjA2ODhjOTcwNS5qcGVn/webp/800/800'} width={100} height={100}/>
            </div>
        </div>
    )
}