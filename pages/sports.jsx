import React from 'react'
import Navbar from './Navbar';
import News from "./News";

const Sports = () => {
  return (
    <>
    <Navbar/>
      <News
        pageSize="5"
        key="/sports"
        category="sports"
        country="in"
      />
    </>
  );
}

export default Sports