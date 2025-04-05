import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import WhatsAppWidget from '@/components/shared/whatsapp-widget'
import { sanityFetch } from '@/sanity/lib/live'
import { defineQuery } from 'next-sanity'
import React from 'react'

const INFO_QUERY = defineQuery(`*[
  _type == "companyInformation"][0]`
)


const FrontendLayout = async ({children}:{children:React.ReactNode}) => {
  const {data: info} = await sanityFetch({query: INFO_QUERY});
  return (
    <>
        <Header />
          <main className="flex-grow">
            {children}
          </main>
        <Footer companyInfo={info}/>

        <WhatsAppWidget 
          phoneNumber='+917428487870'
          position='left'
        />
    </>
  )
}

export default FrontendLayout