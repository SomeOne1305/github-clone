import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import { val } from './context';
import axios from 'axios';
import SecondNav from './Components/SecondNav/SecondNav';
//  https://api.github.com/users/${user_name}
// https://api.github.com/users/${user_name}/followers
// https://api.github.com/users/${user_name}/repos
// https://api.github.com/search/users?q=${user_name}


function App() {
  const [value, ] = React.useContext(val)
  const [user, setUser] = React.useState([])
  React.useEffect(()=>{
    async function getData(){
      let data = await axios.get(`https://api.github.com/search/users?q=${value}`)
      setUser(data.data.items)
    }
    getData()
  },[value])


  return (
    <div className="App">
      <Navigation/>
      <SecondNav/>
    </div>
  );
}

export default App;
