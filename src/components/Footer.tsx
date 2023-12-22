
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

interface FooterProps {

}

export default function Footer({ }: FooterProps) {
    return (
        <>
            {/* For Dekstops */}
            <footer id="footer" className=" lg:block hidden pt-8">
                <div className=" flex flex-col justify-center items-center">
                    <Image unoptimized className=" w-[50px]  pb-8" alt="logo" src={'https://www.destinationhomes.com/images/logo-mark.png'} width={50} height={71} />
                    <h2 className=" text-center text-[#474747] ">9350 S. 150 E. #220 Sandy, UT</h2>
                    <div className=" flex flex-col justify-center items-center gap-8 pt-8">
                        <div className=" relative text-[16px] flex font-semibold justify-between gap-5 items-center text-[#474747]">
                            <button className="  ">FIND YOUR NEW HOME</button>
                            <button className="  ">GALLERIES</button>
                            <button className="  ">WHY DESTINATION HOMES</button>
                            <button className="  ">HOME BUYING GUID</button>
                            <button className="  ">CONTACT US</button>
                            <button className="  ">ACCESSIBILTY</button>
                        </div>
                        <div className=" flex justify-center text-[16px] items-center gap-4">
                            <Link href={'#'}>Terms</Link>
                            <Link href={'#'}>Privacy Policy</Link>
                            <Link href={'#'}>Accessibilty</Link>
                        </div>
                        <ul className=" flex justify-center  items-center gap-3 text-white pb-5">
                            <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                <FaLinkedinIn size={17} />
                            </li>
                            <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                <FaInstagram size={17} />
                            </li>
                            <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                <FaTwitter size={17} />
                            </li>
                            <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                <FaYoutube size={17} />
                            </li>
                            <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                <FaPinterest size={17} />
                            </li>
                        </ul>
                    </div>
                </div>
                <section className=" bg-[#474747] h pt-4 pb-[100px]">
                    <div className=" flex justify-between items-center gap-24 mx-16 px-4 ">
                        <FaHome className='w-full text-start' size={35} color='white' />
                        <h1 className=" w-full text-center text-[#fff] text-[13px]">©2023 Destination Homes. All Rights Reserved. </h1>
                        <h1 className=" w-full text-end text-[#fff]">Site By <span className=" font-semibold">Builder Designs.</span> </h1>
                    </div>
                </section>
            </footer>

            {/* For Small Devices */}
            <footer id="footer" className=" lg:hidden block pt-8">
                <div className=" flex flex-col justify-center items-center">
                    <Image unoptimized className=" w-[50px]  pb-8" alt="logo" src={'https://www.destinationhomes.com/images/logo-mark.png'} width={50} height={71} />
                    <h2 className=" text-center text-[#474747] ">9350 S. 150 E. #220 Sandy, UT</h2>
                    <div className=" flex flex-col justify-center items-center gap-8 pt-8">
                        <div className=" relative text-[16px] flex flex-col font-semibold justify-between gap-3 items-center text-[#474747]">
                            <button className="  ">FIND YOUR NEW HOME</button>
                            <button className="  ">GALLERIES</button>
                            <button className="  ">WHY DESTINATION HOMES</button>
                            <button className="  ">HOME BUYING GUID</button>
                            <button className="  ">CONTACT US</button>
                            <button className="  ">ACCESSIBILTY</button>
                        </div>
                        <div className=" flex justify-center text-[16px] items-center gap-8">
                            <Link href={'#'}>Terms</Link>
                            <Link href={'#'}>Privacy Policy</Link>
                            <Link href={'#'}>Accessibilty</Link>
                        </div>
                        <ul className=" flex justify-center  items-center gap-3 text-white pb-5">
                            <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                <FaLinkedinIn size={17} />
                            </li>
                            <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                <FaInstagram size={17} />
                            </li>
                            <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                <FaTwitter size={17} />
                            </li>
                            <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                <FaYoutube size={17} />
                            </li>
                            <li className=" size-8 rounded-full bg-[#EE2E24] p-2">
                                <FaPinterest size={17} />
                            </li>
                        </ul>
                    </div>
                </div>
                <section className=" pt-4 pb-[100px]">
                    <div className=" flex justify-between gap-14 items-center mx-16 px-4 ">
                        <FaHome className='w-full' size={35} color='' />
                        <h1 className=" w-full text-center  text-[13px]">©2023 Destination Homes. All Rights Reserved. </h1>
                        <h1 className=" w-full text-center ">Site By <span className=" font-semibold">Builder Designs.</span> </h1>
                    </div>
                </section>
            </footer>
        </>
    )
}