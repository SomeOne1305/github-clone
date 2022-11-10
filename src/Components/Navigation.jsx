import React from 'react'
import github from '../main.module.css'
import { val } from '../context'



export default function Navigation() {
    const [, setValue] = React.useContext(val)
    function getValue(e){
        if(e.code === "Enter"){
            setValue(e.target.value)
            e.target.value = ""
        }
    }
    return (
        <nav>
            <div className={github.part}>
                <div className={github.logo}>
                    <i className="fa-brands fa-github"></i>
                </div>
                <div className={github.search}>
                    <input type="text" placeholder='Search or jump to...' onKeyDown={e => getValue(e)} />
                    <span>/</span>
                </div>
                <ul>
                    <li>Pull request</li>
                    <li>Issues</li>
                    <li>Marketplace</li>
                    <li>Explore</li>
                </ul>
            </div>
            <div className={github.part2}>
                <i className={`fa-regular fa-bell ${github.icon}`}></i>
                <div className={github.add}>
                    <i className="fa fa-plus"></i>
                </div>
                <div className={github.profile}>
                </div>
            </div>
        </nav>
    )
}
