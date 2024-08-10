import React, { useState } from 'react';
import './App.css';

function App() {
  const [teams, setTeams] = useState([
    { name: 'FC Shacktar', founded: 1899 },
    { name: 'Real Madrid', founded: 1902 },
    { name: 'Liverpool', founded: 1001 },
  ]);

  const [matches, setMatches] = useState([
    { team1: 'FC Barcelona', team2: 'Real Madrid', score: '2-1' },
    { team1: 'Liverpool', team2: 'Real Madrid', score: '1-1' },
  ]);

  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamFounded, setNewTeamFounded] = useState('');
  const [newMatchTeam1, setNewMatchTeam1] = useState('');
  const [newMatchTeam2, setNewMatchTeam2] = useState('');
  const [newMatchScore, setNewMatchScore] = useState('');

  const handleAddTeam = () => {
    setTeams([...teams, { name: newTeamName, founded: parseInt(newTeamFounded, 10) }]);
    setNewTeamName('');
    setNewTeamFounded('');
  };

  const handleAddMatch = () => {
    setMatches([...matches, { team1: newMatchTeam1, team2: newMatchTeam2, score: newMatchScore }]);
    setNewMatchTeam1('');
    setNewMatchTeam2('');
    setNewMatchScore('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Футбольний сайт</h1>
        <section>
          <h2>Команди</h2>
          <ul>
            {teams.map((team, index) => (
              <li key={index}>
                <h3>{team.name}</h3>
                <p>Рік заснування: {team.founded}</p>
              </li>
            ))}
          </ul>
          <h3>Додати нову команду</h3>
          <input
            type="text"
            value={newTeamName}
            onChange={(e) => setNewTeamName(e.target.value)}
            placeholder="Назва команди"
          />
          <input
            type="number"
            value={newTeamFounded}
            onChange={(e) => setNewTeamFounded(e.target.value)}
            placeholder="Рік заснування"
          />
          <button onClick={handleAddTeam}>Додати команду</button>
        </section>
        <section>
          <h2>Матчі</h2>
          <ul>
            {matches.map((match, index) => (
              <li key={index}>
                <p>{match.team1} - {match.team2}: {match.score}</p>
              </li>
            ))}
          </ul>
          <h3>Додати новий матч</h3>
          <input
            type="text"
            value={newMatchTeam1}
            onChange={(e) => setNewMatchTeam1(e.target.value)}
            placeholder="Команда 1"
          />
          <input
            type="text"
            value={newMatchTeam2}
            onChange={(e) => setNewMatchTeam2(e.target.value)}
            placeholder="Команда 2"
          />
          <input
            type="text"
            value={newMatchScore}
            onChange={(e) => setNewMatchScore(e.target.value)}
            placeholder="Рахунок"
          />
          <button onClick={handleAddMatch}>Додати матч</button>
        </section>
      </header>
    </div>
  );
}

export default App;

