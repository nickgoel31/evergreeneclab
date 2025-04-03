import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import React from 'react'

const FrontendLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
        <Header />
          <main className="flex-grow">
            {children}
          </main>
        <Footer />
    </>
  )
}

export default FrontendLayout