import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Search from './Components/Search/Search';
import SecondNav from './Components/SecondNav/SecondNav';



//  https://api.github.com/users/${user_name}
// https://api.github.com/users/${user_name}/followers
// https://api.github.com/users/${user_name}/repos
// https://api.github.com/search/users?q=${user_name}


function App() {

  return (
    <div className="App">
      <Navigation/>
      <SecondNav/>
      <div className='Hello'>
        <Search/>
      </div>
    </div>
  );
}

export default App;
