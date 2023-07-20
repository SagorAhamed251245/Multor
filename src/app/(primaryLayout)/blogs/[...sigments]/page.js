"use client"

import { useParams, useSearchParams } from "next/navigation";



const SingleBlogs = ({params, searchParams}) => {
  const params2 = useParams();
  console.log("🚀 ~ file: page.js:9 ~ SingleBlogs ~ params2:", params2.segments)

  const searchParams2 = useSearchParams()
  console.log("🚀 ~ file: page.js:11 ~ SingleBlogs ~ searchParams2:", searchParams2.get('title'))


  
    return (
        <div>
            <h1>{searchParams.title}</h1>
        </div>
    );
};

export default SingleBlogs;