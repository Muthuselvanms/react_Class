import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa6";

const Navigation = () => {
  return (
    <>
    <nav>
      <ul>
        <li><Link className='link' to="/"> <FaHome className='icons' />HOME</Link></li>
        <li><Link className='link' to="/product"> <AiOutlineProduct className='icons'/> PRODUCT</Link></li>
        <li><Link className='link' to="/cart"> <FaCartPlus className='icons'/> CART</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Navigation