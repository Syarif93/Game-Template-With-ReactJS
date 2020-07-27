import React from 'react';
import style from './App.module.scss';
import Header from './components/layouts/Header';

function App() {
  
  return (
    <div className={style.App}>
      <div className={style.container}>
        <Header />
      </div>
    </div>
  );
}

export default App;
