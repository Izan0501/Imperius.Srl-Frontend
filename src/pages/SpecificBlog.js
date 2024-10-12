import React, { useDeferredValue, useEffect, useState } from 'react'
import Meta from '../components/Meta'
import BlogHeader from '../components/StoreHeader'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import blogi from "../images/blog-1.jpg"
import Container from '../components/Container'
import { getSpecificBlog } from '../api/getSpecificBlog'

const SpecificBlog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    getSpecificBlog()
      .then((data) => setBlog(data))
      .catch((error) => console.log(`Error: ${error}`))
  }, []);

  const {title, description, image} = blog  

  return (
    <>
      <Meta title={'Dynamic Blog'} />
      <BlogHeader title='Dynamic Blog ' />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link
                className='d-flex align-items-center gap-10'
                to='/blog'>
                <HiOutlineArrowLeft className='fs-4' /> Go back to Blogs
              </Link>
              <h3 className="title">
                {title}
              </h3>
              <img src={'http://localhost:3977/' + image} className='blog-img img-fluid w-100 my-4' alt="" />
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SpecificBlog;