'use client';
import React from 'react';
import Image from 'next/image';
import { blogData } from '../helpers/constants';

const Blog = () => {
  return (
    <>
      <div className="wrapper blog-wrapper">
        <section className="blog">
          <h2>Our Blog</h2>
          <ul className="blog-container flex">
            {blogData.map((blog) => (
              <li key={blog.id} className="blog-col">
                <article className="card-image">
                  <Image
                    className="blog-image"
                    src={blog.image}
                    alt={`${blog.title}`}
                  />
                  <div className="card-text">
                    <p className="date">{blog.date}</p>
                    <h6 className="blog-h6">{blog.title}</h6>
                    <a href={blog.url} className="btn-round-outline">
                      Read More
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Blog;
