import React from 'react'

import{Product,FooterBanner,HeroBanner} from '../components'
import {client} from '../lib/client'
const index = () => {
  return (
    <>
    <HeroBanner/>
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Speakers or many variations</p>
    </div>
    <div className='products-container'>
     { ['Product1','Product2'].map((product)=> product )}
    </div>
    <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)
  return{
    props:{products,bannerData}
  }
}

export default index