import React from 'react'
import Navbar from '../Home/Navbar'
import Blog from '../Blog/Blog'
import Footer from '../Home/footer'
import BlogHeader from '../Blog/BlogHeader'


const Blogpage = () => {
  return (
    <div>
      <Navbar userdisplay="none" tab="Login" logindisplay="initial" onclickroute="/login" loginover="none" />
      <BlogHeader/>
      <Blog />
      <Footer />
    </div>
  )
}

export default Blogpage