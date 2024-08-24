import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomText = Math.random() > 0.5 ? 'Deve' : 'Cüce';
      setText(randomText);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (choice) => {
    if (choice === text) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Deve Cüce Oyunu</h1>
      <div className="mt-5">
        <h2>{text}</h2>
      </div>
      <div className="mt-5">
        <button
          className="btn btn-primary mx-2"
          onClick={() => handleButtonClick('Deve')}
        >
          Deve
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => handleButtonClick('Cüce')}
        >
          Cüce
        </button>
      </div>
      <div className="mt-5">
        <h3>Puan: {score}</h3>
      </div>
    </div>
  );
}

export default App;
