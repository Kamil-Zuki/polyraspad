"use client"
import { useEffect, useState } from 'react';
import Post from './components/Post';
import CreatePost from './components/CreatePost';

interface PostData {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: { user: string; text: string }[];
  shares: number;
}

const HomePage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <CreatePost/> {/* Pass setPosts to CreatePost */}
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default HomePage;
