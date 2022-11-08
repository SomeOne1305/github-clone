import React from 'react'
import './navigation.css'
import { val } from '../../context'

export default function Navigation() {

    const [, setValue] = React.useContext(val)
    function getValue(e){
        window.addEventListener('keydown', (ev)=>{
            if(ev.code === "Enter"){
                setValue(e.target.value)
                e.target.value = ""
            }
        })
    }
    return (
        <nav>
            <div className="part">
                <div className="logo">
                    <i className="fa-brands fa-github"></i>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search or jump to...' onInput={e => getValue(e)} />
                    <span>/</span>
                </div>
                <ul>
                    <li>Pull request</li>
                    <li>Issues</li>
                    <li>Marketplace</li>
                    <li>Explore</li>
                </ul>
            </div>
            <div className="part2">
                <i className="fa-regular fa-bell icon"></i>
                <div className="add">
                    <i className="fa fa-plus"></i>
                </div>
                <div className="profile">
                </div>
            </div>
        </nav>
    )
}
