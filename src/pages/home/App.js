import React from 'react';

import CircleIconComponent from '@/components/store-icons/circle-icon.component';
import LeafIconComponent from '@/components/store-icons/leaf-icon.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CircleIconComponent fillColor="white" size="80px" />
        <LeafIconComponent fillColor="white" size="100px" />
      </header>
    </div>
  );
}

export default App;
