import React from 'react';

import ApplyItem from './components/DetailItem/applyItem/applyItem';
import ApplyExperience from './components/DetailItem/apllyExperience/ApplyExperience.js'
import ViewItem from './components/DetailItem/viewItem/ViewItem.js'
function App() {
  return (<>
     <ViewItem/>    
  </>
 

import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import ApplyItem from './components/DetailItem/applyItem/applyItem';
import ApplyExperience from './components/DetailItem/apllyExperience/ApplyExperience.js'
import ViewItem from './components/DetailItem/viewItem/ViewItem.js'
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Header}></Route>
{/* 이런식으로 라우팅해서 사용할 것 */}
    </Switch>

  );
}

export default App;
