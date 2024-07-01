import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import Rowlist from '../../Components/Rows/RowList/RowList'

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist/>
          <Footer/>
    </>
  )
}

export default Home
