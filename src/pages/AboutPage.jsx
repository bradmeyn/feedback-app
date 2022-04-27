import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div>
        <h1>About Feedback App</h1>
        <p>
          This is a React app made as part of Brad Travery's React from-to-back
          2022 course.
        </p>
        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
