import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ item }) => {
  const { title, description, image } = item;

  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img src={'http://localhost:3977/' + image} alt="blog-Img" className='img-fluid w-100' />
        </div>
        <div className="blog-content">
          <p className='date'>6 Aug, 2024</p>
          <h5 className='title'>{title}</h5>
          <p className='desc'>
            {description}
          </p>
          <Link to="/specific-blog" className='button'>Read More</Link>
        </div>
      </div>
    </>
  )
}

export default BlogCard
