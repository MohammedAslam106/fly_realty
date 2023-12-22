"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaSearch,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { TbX } from "react-icons/tb";

interface NavbarProps { }

export default function Navbar({ }: NavbarProps) {
    const [contactUs, setContactUs] = useState<boolean>(false);
    const [showMore, setShowMore] = useState(false);
    const router = useRouter()
    const pathname = usePathname();
    function toggleMenu() {
        setShowMore(!showMore);
        const menuToggle = document.querySelectorAll(".menu-toggle");
        menuToggle[0]?.classList.toggle("menu-open");
    }
    function toggleMenuSmall() {
        setShowMore(!showMore);
        const menuToggle = document.querySelectorAll(".menu-toggle");
        menuToggle[1]?.classList.toggle("menu-open");
    }

    useEffect(() => {
        console.log(pathname)
        if (pathname.includes("contact-us")) {
            setContactUs(true);
        }
    }, []);

    return (
        <>
            {/* For dekstop screens */}
            <nav className=" lg:block hidden">
                <div className=" relative">
                    {contactUs ? (
                        <>
                            <Image
                                className=" w-full object-contain"
                                unoptimized
                                width={100}
                                height={100}
                                alt="contact"
                                src={
                                    "https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8yNTg3ODAxNThlMGUzMzU0MjFjNzdiNzNjODVlNzc0Ni5qcGVn/webp/2000/2000"
                                }
                            />
                            <div className=" w-full -mt-20 flex justify-center items-center gap-10 mb-[50px] flex-col">
                                <h1 className=" w-full text-center text-[#fff] text-4xl font-semibold ">
                                    CONTACT US
                                </h1>
                                <p className=" bg-red-600 h-1 w-24 text-center"></p>
                            </div>
                        </>
                    ) : (
                        <>
                            <video
                                autoPlay
                                loop
                                muted
                                className="video"
                                src="https://s3.amazonaws.com/buildercloud/fffa60a1b1692fc4bc91dd962360ed51/HomePage_short_lr.mp4"
                            ></video>
                            <div className=" w-full absolute bottom-[-1px] flex items-center">
                                <div className=" w-full bg-white h-10"></div>
                                <Image
                                    alt="v"
                                    className=" w-[500px] h-10 object-fill"
                                    width={100}
                                    height={100}
                                    src={
                                        "https://www.destinationhomes.com/images/carousel-edge.png"
                                    }
                                />
                                <div className=" w-full bg-white h-10"></div>
                            </div>
                        </>
                    )}
                </div>
                <div className=" z-20 text-white text-[15px] w-full absolute top-0 flex  justify-between items-center px-14 py-14">
                    <Image
                        className=" w-[15%]"
                        unoptimized
                        alt="logo"
                        src={"https://www.destinationhomes.com/images/logo-header.svg"}
                        width={165}
                        height={90}
                    />
                    <div className=" font-semibold flex flex-1 justify-center gap-6 items-center ">
                        <button className=" px-3 py-2">WHERE WE BUILD</button>
                        <button className=" px-3 py-2">QUICK MOVE-IN HOMES</button>
                        <button className=" px-3 py-2">FLOOR PLANS</button>
                        <button className=" px-3 py-2">
                            <FaSearch />
                        </button>
                    </div>
                    <button
                        onClick={() => toggleMenu()}
                        className="  flex justify-center items-center gap-2 pr-10"
                        type="button"
                    >
                        <h1 className=" text-lg font-semibold">MENU</h1>
                        <div className="menu-toggle">
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                        </div>
                    </button>
                </div>
                {!contactUs &&
                    <h1 className=" text-center w-full py-[60px] px-[30px] text-[45px] font-semibold text-[#EE2E24]">
                        EXCEPTIONAL HOMES,{" "}
                        <span className=" text-[#474747]">LASTING COMMUNITIES</span>
                    </h1>}
            </nav>
            {/* For small devices */}
            <nav className=" lg:hidden block  bg-white ">
                <div className=" flex justify-between items-center px-3 py-2.5 ">
                    <button>
                        <FaSearch />
                    </button>
                    <Image
                        src={"https://www.destinationhomes.com/images/logo-header.svg"}
                        alt="logo"
                        width={73}
                        height={40}
                    />
                    <button
                        onClick={() => toggleMenuSmall()}
                        className="  flex justify-center items-center gap-2 pr-10 text-[#EE2E24]"
                        type="button"
                    >
                        {/* <h1 className=" text-lg font-semibold">MENU</h1> */}
                        <div className="menu-toggle">
                            <div style={{ background: "#EE2E24" }} className="bar bar1"></div>
                            <div style={{ background: "#EE2E24" }} className="bar bar2"></div>
                            <div style={{ background: "#EE2E24" }} className="bar bar3"></div>
                        </div>
                    </button>
                </div>
                {
                    contactUs ?
                        <>
                            <Image
                                className=" w-full object-contain"
                                unoptimized
                                width={100}
                                height={100}
                                alt="contact"
                                src={
                                    "https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8yNTg3ODAxNThlMGUzMzU0MjFjNzdiNzNjODVlNzc0Ni5qcGVn/webp/2000/2000"
                                }
                            />
                            <div className=" w-full -mt-20 flex justify-center items-center gap-10 mb-[50px] flex-col">
                                <h1 className=" w-full text-center text-[#fff] text-4xl font-semibold ">
                                    CONTACT US
                                </h1>
                                <p className=" bg-red-600 h-1 w-24 text-center"></p>
                            </div>
                        </>
                        :
                        <div className=" w-full relative">
                            <div id="bg-image-navbar" />
                            <div className=" w-full absolute -bottom-[1px] flex items-center">
                                <div className=" w-full bg-white h-10"></div>
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    alt="v"
                                    className=" w-[600px] h-10 object-fill"
                                    src={"https://www.destinationhomes.com/images/carousel-edge.png"}
                                />
                                <div className=" w-full bg-white h-10"></div>
                            </div>
                        </div>}
            </nav>

            {/* Show more */}
            {showMore && (
                <>
                    {/* For Dekstops*/}
                    <div className=" lg:block hidden fixed right-10 top-20 bg-white z-30 px-8 py-[15px] w-[360px] h-[435px]">
                        <button
                            onClick={() => toggleMenu()}
                            className=" absolute top-0 right-0 bg-gray-800"
                        >
                            <TbX size={30} className="p-1" color="white" />
                        </button>
                        <div className=" relative text-[20px] flex flex-col justify-between items-start text-[#474747]">
                            <Link onClick={() => setContactUs(false)} href={'/'} className=" py-[15px] border-b border-gray-200">
                                HOME PAGE
                            </Link>
                            <button className=" py-[15px] border-b border-gray-200">
                                FIND YOUR HOME
                            </button>
                            <button className=" py-[15px] border-b border-gray-200">
                                PHOTO & VIDEO GALLERY
                            </button>
                            <button className=" py-[15px] border-b border-gray-200">
                                WHY DESTINATION HOMEs
                            </button>
                            <button className=" py-[15px] border-b border-gray-200">
                                HOME BUYING GUID
                            </button>
                            <button
                                onClick={() => {
                                    router.push('/contact-us')
                                    setContactUs(true)
                                }}
                                className=" py-[15px] border-b border-gray-200"
                            >
                                CONTACT
                            </button>
                            <ul className=" flex justify-center items-center gap-1 text-white pt-1">
                                <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                    <FaLinkedinIn size={15} />
                                </li>
                                <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                    <FaInstagram size={15} />
                                </li>
                                <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                    <FaTwitter size={15} />
                                </li>
                                <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                    <FaYoutube size={15} />
                                </li>
                                <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                    <FaPinterest size={15} />
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* For Small Devices */}

                    <div className=" lg:hidden block fixed right-0 top-16 bg-white z-30 px-5 py-[0px] w-[244px] h-[415px]">
                        <div className=" relative text-[20px] flex flex-col justify-between items-start text-[#474747]">
                            <Link
                                onClick={() => setContactUs(false)}
                                href={'/'} className=" py-[15px] border-b border-gray-200">
                                HOME PAGE
                            </Link>
                            <button className=" py-[15px] border-b border-gray-200">
                                FIND YOUR HOME
                            </button>
                            <button className=" py-[15px] border-b border-gray-200">
                                PHOTO & VIDEO GALLERY
                            </button>
                            <button className=" py-[15px] border-b border-gray-200">
                                WHY DESTINATION HOMEs
                            </button>
                            <button className=" py-[15px] border-b border-gray-200">
                                HOME BUYING GUID
                            </button>
                            <Link
                                href={"/contact-us"}
                                className=" py-[15px] border-b border-gray-200"
                                onClick={() => setContactUs(true)}
                            >
                                CONTACT
                            </Link>
                            <ul className=" flex justify-center items-center gap-1 text-white pt-1">
                                <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                    <FaLinkedinIn size={15} />
                                </li>
                                <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                    <FaInstagram size={15} />
                                </li>
                                <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                    <FaTwitter size={15} />
                                </li>
                                <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                    <FaYoutube size={15} />
                                </li>
                                <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                    <FaPinterest size={15} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
