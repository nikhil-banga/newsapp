import React from 'react'
import Navbar from './Navbar';
import News from './News';

const Science = () => {
  return (
    <>
      <Navbar/>
      <News
        pageSize="5"
        key="/science"
        category="science"
        country="in"
      />
    </>
  );
}

export default Science