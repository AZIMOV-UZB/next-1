import React from 'react'
import Link from 'next/link'
export const Header = () => {
  return (
    <div>

        <Link href={"/"}>home</Link>
        <Link href={"/about"}>about</Link>



    </div>

  )
}
export default Header