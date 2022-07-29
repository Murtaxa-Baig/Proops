import React from 'react'
import './Icon.css'
import { AiFillFacebook ,AiOutlineWhatsApp ,AiOutlineInstagram ,AiFillLinkedin ,AiFillMessage ,AiFillGithub} from "react-icons/ai";

export default function Icon() {
  return (
    <>
    <h1 className='iconh1'>Icons</h1>
    <div className='iconbox'>
       <AiFillFacebook className='icons' size={30} color={'blue'} />
       <AiOutlineWhatsApp className='icons' size={30} color={'green'}/>
       <AiOutlineInstagram className='icons' size={30} color={'red'}/>
       <AiFillLinkedin className='icons' size={30} color={'skyblue'}/>
       <AiFillMessage className='icons' size={30} color={'#FFDF00'}/>
       <AiFillGithub className='icons' size={30} color={'gray'}/>


    </div>
    </>
  )
}
