import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Header, Card, Footer } from './Components'


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
        }));
        setPosts(mappedPosts);
        console.log(data[5]);
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
    <div className="app-wrapper">
      <Navbar />

      <Header
        key={posts[0].id}
        imageUrl={posts[0].imageUrl}
        title={posts[0].title}
        description={posts[0].description}
        author={posts[0].author}
      />

      <div className="card-container">
        {posts.map((post) => (
          <Card
            key={post.id}
            imageUrl={post.imageUrl}
            title={post.title}
            description={post.description}
            author={post.author}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default App;
