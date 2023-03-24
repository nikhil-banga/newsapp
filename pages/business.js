import React from 'react'
import Navbar from './Navbar'
import News from './News'
const business = () => {
  return (
    <>
    <Navbar/>
      <News
        pageSize="5"
        key="/business"
        category="business"
        country="in"
        />
    </>
  )
}

export default business