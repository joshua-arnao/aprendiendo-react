import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'joshua-arnao',
    name: 'Joshua Arnao',
    isFollowing: true,
  },
  {
    userName: 'omairapalacios',
    name: 'Omaira Palacios',
    isFollowing: false,
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false,
  },
];

const App = () => {
  return (
    <section className="App">
      {/* <TwitterFollowCard
        isFollowing={true}
        name="Joshua Arnao Canessa"
        userName="joshua-arnao"
      /> */}
      {/* <TwitterFollowCard userName="joshua-arnao">
        Joshua Arnao
      </TwitterFollowCard>

      <TwitterFollowCard userName="midudev" initialIsFollowing>
        Miguel Angel Durán
      </TwitterFollowCard>

      <TwitterFollowCard userName="omairapalacios" initialIsFollowing={true}>
        Omaira Palacios
      </TwitterFollowCard> */}
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
};

export default App;
