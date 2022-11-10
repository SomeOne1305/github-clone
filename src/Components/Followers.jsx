import React from 'react'
import github from '../main.module.css'
import { val } from '../context'
import axios from 'axios'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'

export default function Followers() {
    const [value,] = React.useContext(val)
    const [follower, setFollower] = React.useState([])
    React.useEffect(() => {
        async function getFollower() {
            let data = await axios.get(`https://api.github.com/users/${value}/followers`)
            setFollower(data.data)
        }
        getFollower()
    }, [value])
    function no(){
        Toastify({
        text: "There is no follower",
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
          return(
            <h1 style={{textAlign:"center"}}>There is no follower</h1>
        )
    }
    return (
        <div className={github.Repos}>
            {
                follower.length > 0 ?
                    follower.map(item => {
                        return (
                            <div className={github.follower}>
                                <div id={github.none}>
                                    <div className={github.followerImg}>
                                        <img src={item.avatar_url} alt="" />
                                    </div>
                                    <a href={item.html_url}>{item.login}</a>
                                </div>
                                <p className={github.follow} style={{ width: "80px" }}>Follow</p>
                            </div>
                        )
                    }) : no()
                    
            }
        </div>
    )
}
