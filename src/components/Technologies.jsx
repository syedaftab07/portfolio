import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { DiMysql } from "react-icons/di"
import { SiExpress } from "react-icons/si"
import { DiPython } from "react-icons/di"
import { SiPowerbi } from "react-icons/si"
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl"> Technologies</h1>      
      
      <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="rounded-2xl border-4 border-neutral-800" >
         <SiMongodb className="text-7xl text-green-500"/>
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800" >
         <SiExpress className="text-7xl"/>
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800" >
         <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>


        <div className="rounded-2xl border-4 border-neutral-800" >
         <FaNodeJs className="text-7xl text-green-500"/>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800" >
         <DiMysql className="text-7xl text-blue-900"/>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800" >
         <DiPython className="text-7xl"/>
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800" >
         <SiPowerbi className="text-7xl text-yellow-600"/>
        </div>

 
       

      </div>
    
    </div>
  )
}

export default Technologies
