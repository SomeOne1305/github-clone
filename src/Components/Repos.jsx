import React from 'react'
import github from '../main.module.css'
import axios from 'axios'
import { val } from '../context'


export default function Repos() {
    const [value, ] = React.useContext(val)
    const [repos, setRepos] = React.useState([])
    React.useEffect(()=>{
        async function getRepo(){
            let data = await axios.get(`https://api.github.com/users/${value}/repos`)
            setRepos(data.data)
        }
        getRepo()
    },[value])
    return (
        <div className={github.Repos}>
            {
                repos.map(item => {
                    return (
                        <div key={item.node_id} className={github.ReposCard}>
                            <div className={github.Line}>
                                <div className={github.first}>
                                    <h3 className={github.reposName}>{item.name}</h3>
                                    <p className={github.type}>{item.visibility}</p>
                                </div>
                                <div className={github.star}>
                                    <div className={github.st}>
                                        <i className="fa-regular fa-star"></i>
                                        <span style={{ marginLeft: "5px" }}>star</span>
                                    </div>
                                    <div className={github.slideDown}>
                                        <i className="fa fa-caret-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className={github.Line}>
                                <p className={github.indicator} style={{'--clr':'red'}}></p>
                                <span className={github.Language}>{item.language}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
