import { useRouter } from 'next/router';
import React from 'react'
import News from "./News";
import Navbar from './Navbar';


const General = () => {
    const router = useRouter()
    
  return (
    <>
    <Navbar/>
      <News
        pageSize="5"
        key="/general"
        category="general"
        country="in"
      />
    </>
  );
}

export default General