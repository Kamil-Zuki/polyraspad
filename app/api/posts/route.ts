import { NextRequest, NextResponse } from 'next/server';

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: { user: string; text: string }[];
  shares: number;
}

let posts: Post[] = [
  {
    id: 1,
    author: 'User1',
    content: 'This is a sample post',
    likes: 5,
    comments: [{ user: 'User2', text: 'Nice post!' }],
    shares: 2,
  },
  {
    id: 2,
    author: 'User2',
    content: 'This is a sample post 2',
    likes: 3,
    comments: [{ user: 'User3', text: 'Nice post!' }],
    shares: 2,
  },
  {
    id: 3,
    author: 'User3',
    content: 'This is a sample post 3',
    likes: 3,
    comments: [{ user: 'User4', text: 'Nice post!' }],
    shares: 2,
  },
];

let nextId = 4; // Variable for generating unique post IDs

// Handle GET request (fetch posts)
export async function GET(req: NextRequest) {
  return NextResponse.json(posts);
}

// Handle POST request (create new post or update existing ones)
export async function POST(req: NextRequest) {
  const { action, content, comment, id } = await req.json();

  if (action === 'create') {
    const newPost: Post = {
      id: nextId++,
      author: 'User1', // You can dynamically set this based on user info
      content,
      likes: 0,
      comments: [],
      shares: 0,
    };

    posts.push(newPost);
    return NextResponse.json(newPost, { status: 201 });
  }

  // Find the post by ID to update it
  const post = posts.find((p) => p.id === id);
  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  if (action === 'like') {
    post.likes += 1;
  }
  if (action === 'comment' && comment) {
    post.comments.push(comment);
  }
  if (action === 'share') {
    post.shares += 1;
  }

  return NextResponse.json(post);
}
