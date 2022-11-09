import React from 'react'
import User from '../User/User'
import axios from 'axios';
import { val } from '../../context';
import './search.css'
import ReposCard from '../User/ReposCard';
import { Routes, Route } from 'react-router-dom';
import Repository from '../Repository/Repository';

export default function Search() {
  const [value,] = React.useContext(val)
  const [user, setUser] = React.useState([])
  React.useEffect(() => {
    async function getData() {
      let data = await axios.get(` https://api.github.com/users/${value}`)
      setUser(data.data)
    }
    getData()
  }, [value])

  return (
    <div className='Block'>
      {
        <User img={user.avatar_url} name={user.login} />
      }
      <div className="popular">
        {
          <Routes>
            <Route path={`/repos`} element={<Repository/>}/>
          </Routes>
        }
      </div>
    </div>
  )
}
