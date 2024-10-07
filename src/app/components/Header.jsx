import React from 'react'
import Image from 'next/image';
import { FaUserCheck } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "@/assets/logo.svg"


import Link from 'next/link'
export const Header = () => {
  return (
    <div className="flex justify-between container mx-auto px-4 py-2">
  <Link href={"/"}  className="font-bold">
      <Image
          className=" "
          src={logo}
          alt=""
        />
        </Link>
      <div className="flex">
      <ul className="flex gap-4">
        <li> <Link href={"/"}  className="font-bold">Home</Link></li>
        <li> <Link href={"/shop"}  className="font-bold">Shop</Link></li>
        <li> <Link href={"/about"}  className="font-bold">About</Link></li>
        <li> <Link href={"/contact"}  className="font-bold">Contact</Link></li>
        <li> <Link href={"/login"}  className="font-bold">Login</Link></li>
      </ul>
      </div>


      <div  className='flex gap-4'>
      <FaUserCheck  className="text-2xl"/>
      <IoSearchOutline  className="text-2xl"/>
      <FcLike  className="text-2xl"/>
      <FaCartArrowDown  className="text-2xl"/>

      </div>
    </div>

  )
}
export default Header