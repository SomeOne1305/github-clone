import React from 'react'
import user from './user.module.css'

export default function User({img, name}) {
  return (
    <div className={user.user}>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>Follow</p>
    </div>
  )
}
