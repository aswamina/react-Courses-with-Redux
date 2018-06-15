import React from 'react';
import '../../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
      <div>
        <h2>About</h2>
        <p>This Application uses the following technologies</p>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Javascript</li>
          <li>Node</li>
          <li>Browserify</li>
          <li>Gulp</li>
          <li>Bootstrap</li>
        </ul>
      </div>
  );
};

export default AboutPage;
