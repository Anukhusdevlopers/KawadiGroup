import React from 'react'
import Navbar from '../Home/Navbar'
import Blog from '../Blog/Blog'
import Footer from '../Home/footer'


const Blogpage = () => {
  return (
    <div>
      <Navbar userdisplay="none" tab="Login" logindisplay="initial" onclickroute="/login" loginover="none" />
      <Blog />
      <Footer />
    </div>
  )
}

export default Blogpage