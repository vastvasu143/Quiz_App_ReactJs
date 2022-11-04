import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Welcome to React Quiz🔥</h1>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
          <h1>      </h1>
          <h2>Good luck😊</h2>
        </div>
      </div>
    </div>
  );
}

export default Start;