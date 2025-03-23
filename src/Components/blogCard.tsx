"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface DevToPost {
  id: number;
  title: string;
  url: string;
  published_at: string;
  cover_image: string | null;
}

const DEV_TO_USERNAME = "karadza"; // Replace with your dev.to username

const DevToBlog = () => {
  const [posts, setPosts] = useState<DevToPost[]>([]);

  useEffect(() => {
    async function fetchDevToPosts() {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${DEV_TO_USERNAME}`);
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDevToPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">
      {posts.length > 0 ? (
        posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block transition-transform hover:scale-[1.02]"
          >
            {/* Bottom shadow div */}
            <div className="absolute hidden md:block w-full h-full bg-[#5BD124]/40 border-2 border-[#5BD124] translate-x-2 translate-y-2"></div>

            {/* Main container */}
            <div className="relative mx-2 z-10 flex flex-col md:flex-row items-center border-2 border-[#5BD124] bg-[#5BD124]/40 hover:bg-[#5BD124]/70 p-5 shadow-md transition">
              {/* Left side - Text */}
              <div className="flex-1 text-left mb-1">
                <h1 className="text-xl font-bold text-black">{post.title}</h1>
                <p className="text-sm text-black mt-2">
                  {new Date(post.published_at).toDateString()}
                </p>
              </div>

              {/* Right side - Image with overlay */}
              {post.cover_image && (
                <div className="relative w-64 h-64 md:w-48 md:h-32 ml-4">
                  <Image
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    fill
                  />
                  <div className="absolute inset-0 bg-[#5BD124]/40 hover:bg-[#5BD124]/70 transition"></div>
                </div>
              )}
            </div>
          </a>
        ))
      ) : (
        <p className="text-center text-[#5BD124] font-mono">Loading posts...</p>
      )}
    </div>
  );
};

export default DevToBlog;
