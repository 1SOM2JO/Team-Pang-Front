import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Header}></Route>
{/* 이런식으로 라우팅해서 사용할 것 */}
    </Switch>
   
  );
}

export default App;
