import React from "react";
import "./games.scss";
import { useNavigate } from "react-router-dom";

const blogsData = [
  {
    id: "1",
    profile: "ex-1",
    username: "underpin",
    title: "The Classic Arcade Game with pac-man ghost",
    desc: "The world's biggest Pac-Man video games are back. The Pacman arcade game is well recognised with the Pac-man logo and Pac-man ghost",
    date: "Sep 10, 2023",
    slug: "packman",
  },
];

const Games = () => {
  const navigate = useNavigate();

  const onClickHandler = (slug) => {
    navigate(`/games/${slug}`);
  };
  return (
    <div className="blogs">
      <div className="blogs-container">
        <div className="top">
          <div className="titles">
            <p>Subscribe to</p>
            <h2>
              Stay up-to-date <br /> with the latest amazing games
            </h2>
          </div>

          <div className="mail">
            <form>
              <input type="text" placeholder="Enter you email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="content">
          <div className="left">
            {blogsData.map((blog) => (
              <div className="card" onClick={() => onClickHandler(blog.slug)}>
                <div className="profile">
                  <img src={`/${blog.profile}.png`} alt="" className="img" />
                  <span className="profile-name">{blog.username}</span>
                </div>
                <div className="card-title">
                  <h3> {blog.title}</h3>
                  <p>{blog.desc}</p>
                </div>

                <div className="card-desc">
                  <span>{blog.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Games;
