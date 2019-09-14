import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';

import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';

export default function App() {
  return (
    <main>
      <Header />

      <TabNav />
      {/* <EpisodeList /> */}
      {/* <CharacterList /> */}
    </main>
  );
}
