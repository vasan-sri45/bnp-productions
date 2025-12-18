"use client";

import React, { useState, useEffect } from "react";

const BlogHead = ({ slug, onPostLoad }) => {
  const [post, setPost] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);

        // Replace with your real API logic
        const response = await fetch(`/api/posts/${slug}`);
        const postData = await response.json();

        setPost(postData);
        setContent(postData?.content || "");

        onPostLoad?.(postData);
      } catch (error) {
        console.error("Failed to fetch post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug, onPostLoad]);

  if (loading) {
    return (
      <section className="pt-44">
        <div className="container mx-auto max-w-[1200px]">
          <div>Loading post...</div>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="pt-44">
        <div className="container mx-auto max-w-[1200px]">
          <div>Post not found</div>
        </div>
      </section>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="pt-44">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="col-span-8">
            <div className="flex flex-col sm:flex-row">
              <span className="text-base text-midnight_text pr-7 border-r border-solid border-white w-fit">
                {formatDate(post.date)}
              </span>
              <span className="text-base text-midnight_text sm:pl-7 pl-0 w-fit">
                13 Comments
              </span>
            </div>

            <h2 className="pt-7 text-[40px] leading-tight font-bold text-midnight_text">
              {post.title}
            </h2>
          </div>

          <div className="flex gap-6 col-span-4 pt-4 md:pt-0">
            <img
              src={post.authorImage || "/default-avatar.png"}
              alt="Author"
              width={84}
              height={84}
              className="rounded-full w-21 h-21 object-cover"
            />
            <div>
              <span className="text-[22px] leading-tight text-midnight_text">
                {post.author || "Silicaman"}
              </span>
              <p className="text-xl text-midnight_text">Author</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHead;
