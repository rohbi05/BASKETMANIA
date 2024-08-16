import React, { useState, useEffect } from 'react';
import Players from './Players';
import MyTeam from './MyTeam';
import '../App.css';

const App1 = () => {
  const [players, setPlayers] = useState([]);
  const [allPlayers, setAllPlayers] = useState([]);
  const [selectedTeamPlayers, setSelectedTeamPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [myTeam, setMyTeam] = useState([]);
  const [view, setView] = useState('players'); 

  useEffect(() => {
    fetch('http://localhost:3000/players')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPlayers(data.slice(0, 10)); // First 10 players
        setAllPlayers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/my_team')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMyTeam(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  const handlePlayerClick = (player) => {
    const teamPlayers = allPlayers.filter(p => p.team === player.team);
    setSelectedTeamPlayers(teamPlayers);
  };

  const handleAddPlayer = (player) => {
    fetch('http://localhost:3001/my_team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMyTeam(prevTeam => [...prevTeam, data]);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const handleRemovePlayer = (playerId) => {
    // Optimistically remove the player from the UI
    setMyTeam(prevTeam => prevTeam.filter(player => player.player_id !== playerId));

    // Remove the player from the server
    fetch(`http://localhost:3001/my_team/${playerId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
     
  };

  const handleViewChange = (view) => {
    setView(view);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="App">
      {view === 'players' && (
        <>
          <h1>Best Players</h1>
          {selectedTeamPlayers.length > 0 ? (
            <>
              
              <Players
                players={selectedTeamPlayers}
                onPlayerClick={() => {}}
                onAddPlayer={handleAddPlayer}
              />
              <button onClick={() => setSelectedTeamPlayers([])}>Back to Best Players</button>
            </>
          ) : (
            <Players
              players={players}
              onPlayerClick={handlePlayerClick}
              onAddPlayer={handleAddPlayer}
            />
          )}
          <button onClick={() => handleViewChange('myTeam')}>View My Team</button>
        </>
      )}
      {view === 'myTeam' && (
        <MyTeam
          myTeam={myTeam}
          onRemovePlayer={handleRemovePlayer}
          onBack={() => handleViewChange('players')}
        />
      )}
    </div>
  );
};

export default App1;
