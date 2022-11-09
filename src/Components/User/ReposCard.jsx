import React from 'react'
import user from './user.module.css'

export default function ReposCard(reposName) {
  return (
    <div className={user.ReposCard}>
      <p>{reposName}</p>
    </div>
  )
}
