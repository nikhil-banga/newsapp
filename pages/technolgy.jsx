import React from 'react'
import Navbar from './Navbar';
import News from './News'

const Technolgy = () => {
  return (
    <>
      <Navbar/> 
      <News pageSize="5" key="/technology" category="technology" country="in" />
    </>
  );
}

export default Technolgy