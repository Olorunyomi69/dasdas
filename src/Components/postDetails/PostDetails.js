import React, { useEffect, useState } from "react";
import "./postDetails.css";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://techcrunch.com/wp-json/wp/v2/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost({
          title: data.title.rendered,
          content: data.content.rendered,
        });
      })
      .catch((error) => console.error("Error fetching post details:", error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <h2>More Articles</h2>
    </div>
  );
};

export default PostDetails;
