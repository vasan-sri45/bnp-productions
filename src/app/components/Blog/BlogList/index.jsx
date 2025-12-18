// "use client";

// import React, { useState, useEffect } from "react";
// import BlogCard from "../../SharedComponent/Blog/blogCard";

// const BlogList = ({ initialPosts = [] }) => {
//   const [posts, setPosts] = useState(initialPosts);
//   const [loading, setLoading] = useState(!initialPosts.length);

//   useEffect(() => {
//     if (!initialPosts.length) {
//       const fetchPosts = async () => {
//         try {
//           setLoading(true);

//           // Replace with your API endpoint
//           const response = await fetch("/api/posts");
//           const data = await response.json();

//           setPosts(data);
//         } catch (error) {
//           console.error("Failed to fetch posts:", error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchPosts();
//     }
//   }, [initialPosts.length]);

//   if (loading) {
//     return (
//       <section className="flex flex-wrap justify-center pt-8 md:pb-24 pb-16 dark:bg-darkmode">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center py-12">Loading posts...</div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section
//       id="blog"
//       className="flex flex-wrap justify-center pt-8 md:pb-24 pb-16 dark:bg-darkmode"
//     >
//       <div className="container mx-auto max-w-6xl">
//         <div className="grid grid-cols-12 gap-7">
//           {posts.map((blog, i) => (
//             <div
//               key={blog?.slug || i}
//               className="w-full lg:col-span-4 md:col-span-6 col-span-12"
//               data-aos="fade-up"
//               data-aos-delay="200"
//               data-aos-duration="1000"
//             >
//               <BlogCard blog={blog} />
//             </div>
//           ))}
//         </div>
//       </div>
      
//     </section>
//   );
// };

// export default BlogList;


"use client";

import React from "react";
import BlogCard from "../../SharedComponent/Blog/blogCard";

const posts = [
  {
    title: "Sample Blog Post 1",
    date: "2024-01-15",
    excerpt: "This is a sample blog post excerpt.",
    coverImage: "https://m.media-amazon.com/images/I/71Zg6RRQzsL._AC_UF894,1000_QL80_.jpg",
    slug: "sample-blog-1",
  },
  {
    title: "Sample Blog Post 2",
    date: "2024-01-20",
    excerpt: "Another sample blog post excerpt.",
    coverImage: "/images/blog/blog-2.jpg",
    slug: "sample-blog-2",
  },
  {
    title: "Sample Blog Post 3",
    date: "2024-01-25",
    excerpt: "Third sample blog post excerpt.",
    coverImage: "/images/blog/blog-3.jpg",
    slug: "sample-blog-3",
  },
];

const BlogList = () => {
  return (
    <section
      id="blog"
      className="flex justify-center pt-8 pb-24 dark:bg-darkmode"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-10 dark:text-white">
          Latest blog & news
        </h2>

        <div className="grid grid-cols-12 gap-7">
          {posts.map((blog, index) => (
            <div
              key={blog.slug}
              className="w-full lg:col-span-4 md:col-span-6 col-span-12"
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
