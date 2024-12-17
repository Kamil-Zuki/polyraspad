import { useState } from 'react';

interface Comment {
  user: string;
  text: string;
}

interface PostProps {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: Comment[];
  shares: number;
}

const Post = ({ id, author, content, likes, comments, shares }: PostProps) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState('');

  const handleLike = async () => {
    // Optimistically update the UI for likes
    setLikeCount(likeCount + 1);

    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action: 'like' }),
    });
  };

  const handleComment = async () => {
    if (!newComment.trim()) return;

    const comment = { user: 'CurrentUser', text: newComment };

    // Optimistically add the comment
    setCommentList([...commentList, comment]);

    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action: 'comment', comment }),
    });

    setNewComment(''); // Clear comment input after submission
  };

  return (
    <div className="border rounded-lg p-4 my-4 bg-white shadow">
      <h3 className="font-bold">{author}</h3>
      <p className="my-2">{content}</p>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleLike}
          className="text-blue-500 hover:underline"
        >
          👍 {likeCount} Likes
        </button>
        <button className="text-green-500 hover:underline">
          🔗 {shares} Shares
        </button>
        <button className="text-gray-500 hover:underline">💬 Comment</button>
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="border px-2 py-1 rounded w-full"
        />
        <button
          onClick={handleComment}
          className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add Comment
        </button>
      </div>
      <div className="mt-4">
        {commentList.map((comment, index) => (
          <p key={index} className="text-gray-600">
            <span className="font-bold">{comment.user}: </span>
            {comment.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Post;
