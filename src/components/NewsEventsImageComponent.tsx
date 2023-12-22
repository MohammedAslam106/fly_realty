import Image from "next/image";

interface NewsEventsImageComponentProps {
    image: string,
    h1: string,
    h2: string
}

export default function NewsEventsImageComponent({ image, h1, h2 }: NewsEventsImageComponentProps) {
    return (
        <>
            <div className="  max-w-full w-full flex flex-col justify-center gap-2 py-5 px-2">
                <Image unoptimized className=" h-full lg:h-60 object-fill w-full " src={image} alt="news" width={100} height={100} />
                <h2 className=" text-[#B3A774] text-sm">{h2}</h2>
                <h1 className="text-[#474747] text-xl max-h-10">{h1}</h1>
            </div>
        </>
    )
}