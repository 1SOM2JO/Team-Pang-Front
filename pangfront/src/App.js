import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ApplyItem from './components/DetailItem/applyItem/applyItem';
import ApplyExperience from './components/DetailItem/apllyExperience/ApplyExperience.js'
import ViewItem from './components/DetailItem/viewItem/ViewItem.js'
function App() {
  return (
    <Switch>
      <Route path="/ViewItem" exact component={ViewItem}></Route>
      <Route path="/ApplyItem" exact component={ApplyItem}></Route>
      <Route path="/ApplyExperience" exact component={ApplyExperience}></Route>
{/* 이런식으로 라우팅해서 사용할 것 */}
    </Switch>


  );
}

export default App;
