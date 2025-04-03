import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import WhatsAppWidget from '@/components/shared/whatsapp-widget'
import React from 'react'

const FrontendLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
        <Header />
          <main className="flex-grow">
            {children}
          </main>
        <Footer />

        <WhatsAppWidget 
          phoneNumber='+917428487870'
        />
    </>
  )
}

export default FrontendLayout