import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Header, Card, Footer, PostDetails } from "./Components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://techcrunch.com/wp-json/wp/v2/posts?per_page=12")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        const mappedPosts = data.map((post) => ({
          id: post.id,
          imageUrl: post.jetpack_featured_media_url,
          title: post.title.rendered,
          description: post.yoast_head_json.description,
          author: post.yoast_head_json.author,
          content: post.content.rendered,
          etr: post.yoast_head_json.twitter_misc["Est. reading time"],
        }));
        setPosts(mappedPosts);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching posts:", error);
      });
  }, []);

  if (loading) {
    return (
      <div className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header {...posts[0]} />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
        </Routes>

        <div className="card-container">
          {posts.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <Card
                key={post.id}
                imageUrl={post.imageUrl}
                title={post.title}
                description={post.description}
                author={post.author}
                etr={post.etr}
              />
            </Link>
          ))}
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
