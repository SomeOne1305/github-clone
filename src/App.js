import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import { val } from './context';
import axios from 'axios';

function App() {
  const [value, ] = React.useContext(val)
  const [user, setUser] = React.useState([])
  React.useEffect(()=>{
    async function getData(){
      let data = await axios.get(`https://api.github.com/search/users?q=${value}`)
      setUser(data.data)
    }
    getData()
  },[value])
  console.log(value);
  return (
    <div className="App">
      <Navigation/>
      {
      user.map(item=>{
        return(
          <img src={item.avatar_url} alt=""/>
        )
      })
    }
    </div>
  );
}

export default App;
