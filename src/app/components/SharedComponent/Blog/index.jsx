"use client";
import React from 'react';
import BlogCard from './blogCard'; // Make sure BlogCard is converted (from previous conversion)

// Sample blog posts data (replace with your actual data source)
const samplePosts = [
  {
    title: "Sample Blog Post 1",
    date: "2024-01-15",
    excerpt: "This is a sample blog post excerpt.",
    coverImage: "blog-1.jpg",
    slug: "sample-blog-1"
  },
  {
    title: "Sample Blog Post 2",
    date: "2024-01-20",
    excerpt: "Another sample blog post excerpt.",
    coverImage: "blog-2.jpg",
    slug: "sample-blog-2"
  },
  {
    title: "Sample Blog Post 3",
    date: "2024-01-25",
    excerpt: "Third sample blog post excerpt.",
    coverImage: "blog-3.jpg",
    slug: "sample-blog-3"
  }
];

const Blog = () => {
  // Slice first 3 posts (replace with your data fetching logic)
  const posts = samplePosts.slice(0, 3);

  const handleViewMoreClick = () => {
    // Handle "View More" click - replace with your routing logic
    console.log('View more clicked');
    // window.location.href = '/blog'; // or use React Router
  };

  return (
    <section className='flex flex-wrap justify-center dark:bg-darkmode' id='blog'>
      <div className='container mx-auto max-w-6xl'>
        <div className='flex items-baseline justify-between flex-wrap'>
          <h2
            className='sm:mb-11 mb-3 text-4xl font-bold text-midnight_text dark:text-white'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'
          >
            Latest blog & news
          </h2>
          <div
            onClick={handleViewMoreClick}
            className='flex items-center gap-3 text-base text-midnight_text dark:text-white dark:hover:text-primary font-medium hover:text-primary sm:pb-0 pb-3 cursor-pointer'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'
          >
            View More
            <span>
              {/* Replace Icon with SVG arrow or use react-icons */}
              <svg 
                className="w-7.5 h-7.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </span>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-7'>
          {posts.map((blog, i) => (
            <div
              key={i}
              className='w-full md:col-span-4 sm:col-span-6 col-span-12'
              data-aos='fade-up'
              data-aos-delay={`${i * 200}`}
              data-aos-duration='1000'
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
