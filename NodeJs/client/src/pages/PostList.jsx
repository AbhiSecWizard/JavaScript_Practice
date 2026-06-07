import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
const PostList = () => {
const [posts,setPosts] = useState()
const [loading ,setIsLoading] = useState(true)
const [error ,setError] = useState(true)


const getPost = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL || "http://localhost:3000/"}api/v1/posts`,
        { withCredentials: true } // Cookies send karne ke liye important hai
      );
      
      // Backend response se 'posts' array ko state mein save kiya
      if (response.data?.success) {
        setPosts(response.data.posts);
      }
      console.log(response.data.posts)
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Could not retrieve your feed. Please check your connection.");
      
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {

    getPost();
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default PostList








