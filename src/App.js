import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import SecondNav from './Components/SecondNav';
import github from './main.module.css'
import { val } from './context';
import axios from 'axios';
import Repos from './Components/Repos';
import {Routes, Route, Link} from 'react-router-dom'
import Followers from './Components/Followers';
import Following from './Components/Following'

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
            <Link to={'/followers'}>
            <i className="fa-regular fa-users"></i>
            <span>{userData.followers} </span> <span>followers</span>
            </Link>
            <span> · </span>
            <Link to={'/followings'}>
            <span>{userData.following} </span> following
            </Link>
          </div>
        </div>
        <Routes>
          <Route path='/repos' element={<Repos/>}/>
          <Route path='/followers' element={<Followers/>}/>
          <Route path='/followings' element={<Following/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
