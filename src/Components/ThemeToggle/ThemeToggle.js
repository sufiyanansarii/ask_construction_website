import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap"; // Import Bootstrap's Button
// import "./ThemeToggle.css"; // For fixed position and custom styling
import { Sun, Moon } from 'react-bootstrap-icons';
import './ThemeToggle.css'

const ThemeToggle = () => {
  const [isNight, setIsNight] = useState(false);

  // Toggle between day and night mode
  const toggleTheme = () => {
    setIsNight(!isNight);
  };

  // Apply the day/night mode styles to the body
  useEffect(() => {
    if (isNight) {
      document.body.classList.add("night-mode");
    } else {
      document.body.classList.remove("night-mode");
    }
  }, [isNight]);

  return (
    <div className="theme-toggle">
      <Button 
        variant={isNight ? "dark" : "light"} 
        onClick={toggleTheme} 
        className="fixed-toggle-btn"
      >
              {isNight ? <Moon size={24} color="white" /> : <Sun size={24} color="white" />} {/* Set icon color */}
        

      </Button>
    </div>
  );
};

export default ThemeToggle;
