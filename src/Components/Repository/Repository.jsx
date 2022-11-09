import React from 'react'
import user from '../User/user.module.css'
import ReposCard from '../User/ReposCard'

export default function Repository() {
  return (
    <div className={user.Repository}>
      <ReposCard/>
    </div>
  )
}
