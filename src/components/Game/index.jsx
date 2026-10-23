import React, { useState } from 'react'
import { getTotalExp } from '../../common/helpers';
import { createTeams, getResult, getBestWarrior, SIDES } from '../../common/game';
import Countdown from '../Countdown';
import Desert from '../Desert';
import Team from '../Team';
import Scoreboard from '../Scoreboard';
import VictoryScreen from '../VictoryScreen';

const Game = () => {
  const [teams, setTeams] = useState(createTeams);
  const [round, setRound] = useState(1);
  const [showBanner, setShowBanner] = useState(true);

  const exp1 = getTotalExp(teams.team1);
  const exp2 = getTotalExp(teams.team2);
  const result = getResult(exp1, exp2);

  const winnerTeam = result === 'muslim' ? teams.team1 : teams.team2;
  const hero = result === 'draw' ? null : getBestWarrior(winnerTeam);

  const handleStartGame = () => {
    setTeams(createTeams());
    setShowBanner(true);
    setRound((r) => r + 1);
  };

  return (
    // key dəyişəndə içindəki hər şey yenidən qurulur, animasiyalar təkrar başlayır
    <div key={round}>
      <Countdown />

      <Desert>
        <button className="btn-new" onClick={handleStartGame}>New Game</button>

        <Team
          title={SIDES.muslim.title}
          side="muslim"
          pokemons={teams.team1}
          isWinner={result === 'muslim'}
          isDraw={result === 'draw'}
        />

        <Scoreboard
          name1={SIDES.muslim.short}
          name2={SIDES.quraysh.short}
          exp1={exp1}
          exp2={exp2}
        />

        <Team
          title={SIDES.quraysh.title}
          side="quraysh"
          pokemons={teams.team2}
          isWinner={result === 'quraysh'}
          isDraw={result === 'draw'}
        />
      </Desert>

      {showBanner && (
        <VictoryScreen
          result={result}
          exp1={exp1}
          exp2={exp2}
          hero={hero}
          onClose={() => setShowBanner(false)}
          onRestart={handleStartGame}
        />
      )}
    </div>
  )
}

export default Game