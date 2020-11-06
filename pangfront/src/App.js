import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ApplyItem from './components/DetailItem/applyItem/applyItem';
import ApplyExperience from './components/DetailItem/apllyExperience/ApplyExperience.js'
import ViewItem from './components/DetailItem/viewItem/ViewItem.js'
import Experience from './components/Experience/Experience';
import Buy from './components/buy/Buy';
import Login from './components/Login/Login';
import Register from './components/register/Register';
import MainPage from './components/MainPage/MainPage';
import Mypage from './components/MyPage/MyPage';
import EnterSomething from './components/EnterSomething/EnterSomething';

function App() {
  return (
    <Switch>
      <Route path="/viewItem" exact component={ViewItem}></Route>
      <Route path="/applyItem" exact component={ApplyItem}></Route>
      <Route path="/applyExperience" exact component={ApplyExperience}></Route>
      <Route path="/experience" exact component={Experience}></Route>
      <Route path="/buy" exact component={Buy}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/register" exact component={Register}></Route>
      <Route path="/mainPage" exact component={MainPage}></Route>
      <Route path="/mypage" exact component={Mypage}></Route>
      <Route path="/EnterSomething" exact component={EnterSomething}></Route>
    </Switch>


  );
}

export default App;
