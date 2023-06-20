// import { useRouter } from 'next/router';
"use client"
import Navbar from "@/app/components/Navbar";
import { useEffect, useState } from "react";

import { Client, Databases, ID, Query } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64907f5402098d64485a');


const BlogPage = ({ params }) => {
    const [blogPost, setBlogPost] = useState()
    const { slug } = params;

    useEffect(() => {
        document.title = "Home : My personal blog"
        const databases = new Databases(client);

        let promise = databases.listDocuments("64908ac05fd08bbdf04e", "64908ae1104e1c72ae2a",
        [
            Query.equal('slug', slug)
        ])

        promise.then(function (response) {
            setBlogPost(response.documents[0]);
        }, function (error) {
            console.log(error);
        });

        return () => {

        }
    }, [])


    return (
        <>
            <Navbar />
            <div className="container mx-auto">

                <div className="bg-white rounded-lg shadow-lg mt-8">
                    <h1 className="text-3xl font-bold mb-4">{blogPost?.title}</h1>

                    <img src={blogPost?.images} alt="Top Image" className="w-full py-4" style={{ maxHeight: '600px' }} />

                    <p className="text-lg"dangerouslySetInnerHTML={{ __html:blogPost?.content}}></p>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
