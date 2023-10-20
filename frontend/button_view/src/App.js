import React, { useState } from 'react';
import HandleEvents from './handleEvents';

function App() {
  const [myAppVisible, setMyAppVisible] = useState(false);

  const handleStartMyApp = () => {
    setMyAppVisible(true);
  };

  return (
    <div className="App">
      {!myAppVisible ? (
        <button onClick={handleStartMyApp}>
          get outfit
        </button>
      ) : (
        <HandleEvents />
      )}
    </div>
  );
}

export default App;