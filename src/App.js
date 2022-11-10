import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import SecondNav from './Components/SecondNav';
import github from './main.module.css'
import { val } from './context';
import axios from 'axios';
import Repos from './Components/Repos';
import {Routes, Route} from 'react-router-dom' 

//  https://api.github.com/users/${user_name}
// https://api.github.com/users/${user_name}/followers
// https://api.github.com/users/${user_name}/repos
// https://api.github.com/search/users?q=${user_name}


function App() {
  const [value,] = React.useContext(val)
  const [userData, setUserData] = React.useState([])
  
  React.useEffect(()=>{
    async function getUser(){
      let data = await axios.get(`https://api.github.com/users/${value}`)
      setUserData(data.data)
    }
    getUser()
  },[value])
  return (
    <div className="App">
      <Navigation />
      <SecondNav />
      <div className={github.container}>
        <div className={github.card}>
          <div className={github.userImage}>
            <img src={userData.avatar_url} alt="" />
          </div>
          <span className={github.userName}>{userData.login}</span>
          <p className={github.follow}>Follow</p>
          <div className={github.userInt}>
            <i class="fa-regular fa-users"></i>
            <a href=''><span>{userData.followers}</span> followers</a>
            <span> · </span>
            <a href=''><span>{userData.following}</span> following</a>
          </div>
        </div>
        <Routes>
          <Route path='/repos' element={<Repos/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
