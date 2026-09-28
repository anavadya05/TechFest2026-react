import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load announcements");
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to TechFest 2026 🚀</h1>
        <p>Innovate. Create. Celebrate.</p>
        <p>Three days of hackathons, workshops and competitions.</p>

        <Link to="/events">
          <button className="hero-btn">Explore Events</button>
        </Link>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <div className="highlight-card">
          <h2>3 Days</h2>
          <p>Of excitement</p>
        </div>

        <div className="highlight-card">
          <h2>10+</h2>
          <p>Exciting Events</p>
        </div>

        <div className="highlight-card">
          <h2>100+</h2>
          <p>Participants</p>
        </div>
      </section>

      {/* Announcements */}
      <section className="announcements">
        <h2>📢 Announcements</h2>

        {loading && <p>Loading...</p>}

        {error && <p className="error-msg">{error}</p>}

        {!loading && !error && (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Join the Fest?</h2>
        <p>Discover amazing events and register now!</p>

        <Link to="/register">
          <button className="hero-btn">Register Now</button>
        </Link>
      </section>

    </div>
  );
}

export default Home;