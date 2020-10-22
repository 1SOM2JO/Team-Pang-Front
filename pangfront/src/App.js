import React from 'react';
import { Route } from 'react-router-dom';
import MyPage from './components/MyPage/MyPage';
import MainPage from './components/MainPage/MainPage';
import EnterSomething from './components/EnterSomething/EnterSomething';

function App() {
  return (
    <>
      <Route path="/mypage" component={MyPage}/>
      <Route path="/main" component={MainPage}/>
      <Route path="/enter" component={EnterSomething}/>
    </>
  );
}

export default App;
