"use client"
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Client, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64907f5402098d64485a');

export default function Home() {
  const [blogPosts, setBlogPost] = useState([]);

  useEffect(() => {
    document.title = "Home : My personal blog";
    const databases = new Databases(client);

    const promise = databases.listDocuments("64908ac05fd08bbdf04e", "64908ae1104e1c72ae2a");

    promise.then(
      function (response) {
        const updatedBlogPosts = response.documents.map((blogPost) => {
          // Update the "Published on" date with the current date
          const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          return {
            ...blogPost,
            date: currentDate,
          };
        });
        setBlogPost(updatedBlogPosts);
      },
      function (error) {
        console.log(error);
      }
    );

    return () => {};
  }, []);
  return (
    <>
    <Navbar/>
    <div className="container mx-auto py-8" >
      <div className="max-w-4xl mx-auto" >
        
          {blogPosts.map((blogPost) => (
            <div key={blogPost.slug} className="mb-8" style={{ width: '1200px' }} >
              <img style={{width:'960px', height:'440px'}}
                src={blogPost.images}
                alt="Blog Post Image"
                className="max-w-full h-auto rounded-lg"
              />
              <h1 className="text-3xl font-bold my-4">{blogPost.title}</h1>
              <p className="text-gray-600 mb-4">
                Published on {blogPost.date} <span className="font-bold"></span>{' '}
                by Aman Shukla <span className="font-bold"></span>
              </p>
              <div className="prose">
                <p>{blogPost.metadesc}...</p>
              </div>
              <Link href={`/blog/${blogPost.slug}`}
                className="inline-block bg-blue-500 text-white rounded px-4 py-2 mt-4 transition-colors duration-300 ease-in-out hover:bg-blue-700">
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    
    
    </>
  )
}

