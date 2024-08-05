import React, { useState }from 'react';
import Tracklist from './Components/Tracklist';

function App() {
  const [tracks, setTracks] = useState([
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
  ]);

  return (
    <>
      <div>
        <h1>Track List</h1>
        <Tracklist tracks={tracks}/>
      </div>
    
    </>
  );
}

export default App;
