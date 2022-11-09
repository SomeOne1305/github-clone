import React from 'react'
import user from '../User/user.module.css'
import ReposCard from '../User/ReposCard'
import { val } from '../../context'
import axios from 'axios'

export default function Repository({rep}) {
  const [value,] = React.useContext(val)
  const [repos, setRepos] = React.useState([])
  React.useEffect(() => {
    async function getRepos() {
      let reposit = await axios.get(`https://api.github.com/users/${value}/repos`)
      setRepos(reposit.data)
    }
    getRepos()
  })
  console.log(repos);
  return (
    <div className={user.Repository}>
      {
        repos.map(item=>{
          return (<ReposCard key={item.node_id} reposName={item.name}/>)
        })
      }
    </div>
  )
}
