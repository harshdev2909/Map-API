"use client"; 
import React, { useEffect, useState } from 'react'

function Adress() {

    const[source,setSource] = useState<any>()
    const[list,setList]=useState<any>([])

    useEffect(()=>{
        const delay = setTimeout(()=>{
            getAdress()
        },1000)

        return()=>clearTimeout(delay)
        
    },[source])
    const getAdress = async()=>{
        const res=await fetch('/api/search?q='+source,{
            headers : {
                "content-Type" :"application/json"
            }
        })

        const result = await res.json()
        setList(result)
    }
  return (
    <div className='mt-5'>
        <div>
            <label>Where from? </label>
            <input type='text'
            className='p-1 border-[1px] w-full rounded-md bg-white focus:bg-black'
            value={source}
            onChange={(e)=>setSource(e.target.value)}
            />
            {list?.suggestions?
            <div>
            {list.suggestions?.map((item:any,index:number)=>(
                <h2>{item.full_address}</h2>
            ))}
            </div>:null}
        </div>
        <div className='mt-3'>
            <label>Where To? </label>
            <input type='text'
            className='p-1 border-[1px] w-full rounded-md bg-white focus:bg-black'/>
        </div>
    </div>
  )
}

export default Adress