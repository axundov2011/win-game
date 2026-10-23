import './App.css'
import Header from "./components/Header"
import Navbar from './components/Navbar';
import { useState } from 'react';
import { getTotalExp, shuffle } from './common/helpers';
import { muslimArmy, qurayshArmy } from './mock/warriors';
import Team from './components/Team';

const confettiColors = ['#ffd166', '#ef476f', '#06d6a0', '#118ab2', '#ffffff'];
const TEAM_SIZE = 4;
const withForm = (warrior) => ({
  ...warrior,
  base_experience: warrior.base_experience + Math.floor(Math.random() * 61) - 30,
});

const createTeams = () => ({
  team1: shuffle(muslimArmy).slice(0, TEAM_SIZE).map(withForm),
  team2: shuffle(qurayshArmy).slice(0, TEAM_SIZE).map(withForm),
});

function App() {
  const [teams, setTeams] = useState(createTeams);
  const [round, setRound] = useState(1);
  const [showBanner, setShowBanner] = useState(true);

  const exp1 = getTotalExp(teams.team1);
  const exp2 = getTotalExp(teams.team2);
  const isDraw = exp1 === exp2;

  const winnerName = exp1 > exp2 ? 'İslam ordusu' : 'Qureyş müşrikləri';
  const winnerTeam = exp1 > exp2 ? teams.team1 : teams.team2;
  const best = [...winnerTeam].sort((a, b) => b.base_experience - a.base_experience)[0];

  const handleStartGame = () => {
    setTeams(createTeams());
    setShowBanner(true);
    setRound((r) => r + 1);
  };

  const muslimWon = exp1 > exp2;
  const qurayshWon = exp2 > exp1;

  return (
    <>
      <Header />
      <Navbar />

      {/* key dəyişəndə içindəki hər şey yenidən qurulur və animasiyalar təkrar başlayır */}
      <div key={round}>
        {/* 1-2-3 geri sayım */}
        <div className="countdown">
          <span className="cd cd1">1</span>
          <span className="cd cd2">2</span>
          <span className="cd cd3">3</span>
          <span className="cd cdgo">⚔️ Döyüş!</span>
        </div>

        <div className="desert">
          <div className="sun" />
          <div className="sand" />
          <div className="dune dune1" />
          <div className="dune dune2" />

          <div className="arena">
            <button className="btn-new" onClick={handleStartGame}>New Game</button>

            <Team
              title="İslam ordusu"
              side="muslim"
              pokemons={teams.team1}
              isWinner={exp1 > exp2}
              isDraw={isDraw}
            />

            <div className="scoreboard">
              <span className="sb-name">İslam ordusu</span>
              <span className="sb-score">{exp1} : {exp2}</span>
              <span className="sb-name">Qureyş</span>
            </div>

            <Team
              title="Qureyş müşrikləri"
              side="quraysh"
              pokemons={teams.team2}
              isWinner={exp2 > exp1}
              isDraw={isDraw}
            />
          </div>
        </div>

        {/* Qələbə pəncərəsi */}
        {showBanner && (
          <div className={`victory ${isDraw ? 'draw' : muslimWon ? 'win-muslim' : 'defeat'}`}>
            {
              !qurayshWon && (
                <>
                  <div className="victory-rays" />

                  <div className="confetti">
                    {Array.from({ length: 40 }, (_, i) => (
                      <i
                        key={i}
                        style={{
                          left: `${(i * 37) % 100}%`,
                          background: confettiColors[i % confettiColors.length],
                          animationDelay: `${6.5 + (i % 8) * 0.3}s`,
                          animationDuration: `${2.5 + (i % 4) * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>
                </>
              )
            }

            <div className="victory-box">
              <div className="victory-trophy">{isDraw ? '🤝' : '🏆'}</div>
              <h2 className="victory-title">
                {isDraw ? 'Bərabərlik!' : `${winnerName} qalib gəldi!`}
              </h2>
              <p className="victory-score">{exp1} : {exp2}</p>

              {!isDraw && (
                <>
                  <div className="victory-portrait">
                    <img src={best.image} alt={best.name} />
                  </div>
                  <div className="victory-ribbon">
                    ⚔️ Döyüşün qəhrəmanı: {best.name}
                  </div>
                </>
              )}

              <div className="victory-actions">
                <button className="btn-new" onClick={() => setShowBanner(false)}>Bağla</button>
                <button className="btn-new" onClick={handleStartGame}>Yeni oyun</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App