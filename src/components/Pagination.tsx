'use client'
import { Dispatch, SetStateAction, use, useEffect, useRef, useState } from "react"
import {LiaLessThanSolid,LiaGreaterThanSolid} from 'react-icons/lia'

interface PaginationProps{
    setStartingIndex:Dispatch<SetStateAction<number>>,
    setEndingIndex:Dispatch<SetStateAction<number>>,
    startingIndex:number,
    endingIndex:number,
    postPerPage:number,
    numberOfPost:number
}

export default function Pagination({numberOfPost,postPerPage,setStartingIndex,setEndingIndex,startingIndex,endingIndex}:PaginationProps ){
    const activeBtn=useRef<Array<HTMLButtonElement | null>>([])
    let btnCount:number
    if(numberOfPost%postPerPage==0){
        btnCount=numberOfPost/postPerPage
    }
    else{
        btnCount=Math.floor(numberOfPost/postPerPage)+1
    }
    useEffect(()=>{
        activeBtn.current[0]?.classList.replace('in-active','active')
    },[])
    return(
        <>
        <div className=" flex justify-between gap-20 items-start pt-10">
            <div className=" w-full"></div>
            <div className=" w-full flex justify-center items-center gap-3">
                {
                    Array(btnCount).fill(0).map((item,ind)=>{
                        return(
                            <button onClick={()=>{
                                setStartingIndex((ind+1)*postPerPage-postPerPage)
                                setEndingIndex((ind+1)*postPerPage)
                                console.log((ind+1)*btnCount-btnCount,(ind+1)*btnCount)
                                document.querySelector('.active')?.classList.replace('active','in-active')
                                activeBtn.current[ind]?.classList.remove('in-active')
                                activeBtn.current[ind]?.classList.add('active')
                            }} 
                            id="ind" ref={(e)=>activeBtn.current[ind]=e} className=" in-active size-3 rounded-full" type="button"></button>
                        )
                    })
                }
            </div>
            <div className=" w-full flex justify-center items-center gap-1">
                <button onClick={()=>{
                    if(startingIndex>0){
                        setStartingIndex(startingIndex-postPerPage)
                        setEndingIndex(endingIndex-postPerPage)
                        document.querySelector('.active')?.classList.replace('active','in-active')
                        activeBtn.current[(startingIndex-postPerPage)/postPerPage]?.classList.remove('in-active')
                        activeBtn.current[(startingIndex-postPerPage)/postPerPage]?.classList.add('active')
                    }
                }} disabled={startingIndex==0} className="bg-[#474747]  disabled:bg-gray-300 p-1" type="button">
                    <LiaLessThanSolid className='font-light text-white' size={35}/>
                </button>
                <button onClick={()=>{
                    if(endingIndex<numberOfPost){
                        setStartingIndex(startingIndex+postPerPage)
                        setEndingIndex(endingIndex+postPerPage)
                        document.querySelector('.active')?.classList.replace('active','in-active')
                        activeBtn.current[(startingIndex+postPerPage)/postPerPage]?.classList.remove('in-active')
                        activeBtn.current[(startingIndex+postPerPage)/postPerPage]?.classList.add('active')
                    }
                }} disabled={numberOfPost==endingIndex} className={" disabled:bg-gray-300 bg-[#474747] p-1"} type="button">
                    <LiaGreaterThanSolid className='font-light text-white' size={35}/>
                </button>
            </div>
        </div>
        </>
    )
}