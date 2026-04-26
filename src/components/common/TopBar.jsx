import React from 'react'
import { Link } from 'react-router-dom'
import { FaPencilAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <>
        <div className='w-full h-6 bg-gradient-to-r from-red-700 via-red-500 to-blue-800'>
            <span className='flex flex-row gap-2 justify-start items-center relative pl-[10em] animate-blink'>
                <FaPencilAlt className='text-white text-lg'/>
                <Link to="https://exams.ccsuforms.in/Reg_BPharma" target='_blank' className='text-white font-semibold md:text-md'>Admission 2026-2027</Link>
            </span>
        </div>
    </>
  )
}

export default TopBar