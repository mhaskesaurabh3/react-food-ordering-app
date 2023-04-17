import { useState } from 'react';
import RestaurantContainer from './Components/Body/RestaurantContainer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <RestaurantContainer />
    </div>
  );
}

export default App;
