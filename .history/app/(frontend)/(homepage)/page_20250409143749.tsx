
import HomepageWithLoading from "@/components/home/homepage-with-loading";

import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const GALLERY_QUERY = `*[_type == "galleryImage"]`;
const CLIENTS_QUERY = defineQuery(`*[
  _type == "client"]`
)

export default async function Home() {
  const {data: galleryData} = await sanityFetch({query: GALLERY_QUERY});
  const {data: clientsData} = await sanityFetch({query: CLIENTS_QUERY});
  return (
    <>
      <HomepageWithLoading galleryData={galleryData} clientsData={clientsData} />
    </>
  );
}
