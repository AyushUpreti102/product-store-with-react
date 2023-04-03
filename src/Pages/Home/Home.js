import React from "react";
import './Home.css'
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="landingBox position-relative">
      <img src="https://voicebot.ai/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg" alt="landing page image" className="position-absolute h-100 w-100"></img>
      <h1 className="welcomeMessage position-absolute start-50 translate-middle mb-5">Welcome to the Store</h1>
      <button type="button" className="shopNowButton btn btn-primary btn-lg position-absolute start-50 translate-middle rounded-pill" onClick={() => navigate('/store')}>Shop Now</button>
    </div>
  );
};
