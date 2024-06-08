
"use client";
import React, { useEffect, useState } from 'react';

const MainContent: React.FC = () => {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetch('https://demo6396395.mockable.io/prompts')
      .then(response => response.json())
      .then(data => setPrompts(data));
  }, []);

  return (
    <div className="main-content">
      <input className='search' type="text" placeholder="Search prompts" />
      <div className="prompts">
        {prompts.map((prompt, index) => (
          <div key={index} className="prompt-card">
            {/* <p>{prompt.name}</p> */}
            <h3>{`Prompt ${index + 1}`}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
