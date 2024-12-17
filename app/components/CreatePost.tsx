import { useState } from 'react';

// Define Post type to match the structure of a post
interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  shares: number;
  comments: { user: string; text: string }[];
}

const CreatePost = () => {
  // State to store the content of the new post
  const [content, setContent] = useState<string>('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreatePost = async () => {
    if (!content.trim()) return; // Don't create a post if the content is empty

    setLoading(true);
    setError(null);

    const newPost = {
      action: 'create',
      content,
    };

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const createdPost: Post = await response.json();
        setPosts([createdPost, ...posts]);
        setContent('');
      } else {
        throw new Error('Error creating post');
      }
    } catch (err) {
      setError('Failed to create the post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="textarea w-full p-4 border border-gray-300 rounded"
      />
      <button
        onClick={handleCreatePost}
        disabled={loading}
        className="btn bg-blue-500 text-white mt-4"
      >
        {loading ? 'Creating...' : 'Create Post'}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
{/* 
      <div className="mt-6">
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.author}</p>
            <p>{post.content}</p>
            <p>Likes: {post.likes}</p>
            <p>Shares: {post.shares}</p>
            <div>
              {post.comments.map((comment, index) => (
                <p key={index}>
                  {comment.user}: {comment.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CreatePost;
