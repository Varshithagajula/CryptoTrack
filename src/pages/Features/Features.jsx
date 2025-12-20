import React from "react";
import "./Features.css";
import { CheckCircle, Lock, TrendingUp, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <TrendingUp size={40} color="#00c853" />,
      title: "Real-Time Crypto Tracking",
      desc: "Stay updated with live cryptocurrency prices and market changes."
    },
    
    {
      icon: <Globe size={40} color="#26d07c" />,
      title: "Global Currency Support",
      desc: "View and compare crypto prices in USD, EUR, and INR seamlessly."
    },
   
    {
    icon: <TrendingUp size={40} color="#42a5f5" />,
    title: "Custom Watchlist",
    desc: "Create a personalized watchlist to monitor your favorite coins effortlessly."
    }
    
  ];

  return (
    <div className="features-page">
      <h1>Powerful Features</h1>
      <p className="subtitle">
        Discover what makes our platform your ultimate crypto companion.
      </p>

      <div className="features-grid">
        {features.map((f, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{f.icon}</div>
            <h2>{f.title}</h2>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
