import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image
          src="/Logo.png"
          alt="Logo"
          width={80}
          height={50}
          />
    </div>
  )
}

export default Logo