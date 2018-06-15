import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
      <div className="jumbotron">
        <h1>My Courses</h1>
        <p>List my courses using awesome React</p>
        <Link to="about" className="btn btn-primary btn-lg">About</Link>
      </div>
  );
};

export default HomePage;
