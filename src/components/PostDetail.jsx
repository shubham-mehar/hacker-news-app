import { useEffect, useState } from 'react';
import hnApi from '../services/hnApi';
import './PostDetail.css';

const PostDetail = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await hnApi.getPost(postId);
      setPost(postData);
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return (
      <div className="loading-container">
        Loading...
      </div>
    );
  }

  return (
    <div className="post-detail-container">
      <h2>{post.title}</h2>
      <p>Points: {post.points}</p>
      <ul>
        {post.children.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};


export default PostDetail;
