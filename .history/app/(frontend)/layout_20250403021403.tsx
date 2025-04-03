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