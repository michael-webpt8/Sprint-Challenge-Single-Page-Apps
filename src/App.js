import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import {Route} from 'react-router-dom';

import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main>
      <Header />

      <TabNav />
      {/* <EpisodeList /> */}
      {/* <CharacterList /> */}

      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/characters' component={CharacterList} />
      <Route exact path='/locations' component={LocationsList} />
      <Route exact path='/episodes' component={EpisodeList} />
    </main>
  );
}
